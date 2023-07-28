from django.core.management.base import BaseCommand
import requests
from bs4 import BeautifulSoup
from wiki.models import WikiDocument
import xml.etree.ElementTree as ET

class Command(BaseCommand):
    help = 'Crawling Naver Open Dictionary and save data to database'

    def handle(self, *args, **kwargs):
        data_list = self.crawl_naver_open_dictionary()
        self.save_to_database(data_list)

    def crawl_naver_open_dictionary(self):
        base_url = 'https://open-pro.dict.naver.com/_ivo/dictmain?dictID=enegdwdxdyebegdxdwdsqyofchrjhurh&page='
        data_list = []

        try:
            # 최대 페이지 수를 동적으로 가져오기 위해 첫 페이지를 요청하여 HTML을 분석
            response = requests.get(base_url + '1')
            response.raise_for_status()
            soup = BeautifulSoup(response.text, 'html.parser')
            max_page = len(soup.select('.page .page-btn'))  # 페이지 목록의 버튼 개수가 최대 페이지 수

            for page in range(1, max_page + 1):  # 1부터 최대 페이지까지 페이지를 순회
                url = base_url + str(page)
                response = requests.get(url)
                response.raise_for_status()
                soup = BeautifulSoup(response.text, 'html.parser')
                word_cards = soup.select('.word-card')  # 단어들이 들어있는 요소 선택

                for word_card in word_cards:
                    title = word_card.select_one('.card-title__text').text.strip()  # 단어 제목 추출
                    content = word_card.select_one('.card-desc__text').text.strip()  # 단어 내용 추출

                    # 이미지 URL 가져오기
                    image_url = self.search_naver_image(title)

                    data_list.append({'title': title, 'content': content, 'image_url': image_url})
                    print(f'Crawled: {title}')

        except requests.exceptions.RequestException as e:
            print(f"Error while making a request: {e}")
        except AttributeError as e:
            print(f"AttributeError while parsing HTML: {e}")

        return data_list

    def search_naver_image(self, query):
        client_id = 'KX8WLCuNaUsd10J9_CYs'
        client_secret = 'CM3M8h5RrY'

        url = f'https://openapi.naver.com/v1/search/image.xml?query={query}&display=10&start=1&sort=sim'
        
        headers = {
            'X-Naver-Client-Id': client_id,
            'X-Naver-Client-Secret': client_secret
        }

        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()

            if response.status_code == 200:
                # API 호출이 성공한 경우 XML 파싱
                root = ET.fromstring(response.text)
                items = root.findall('.//item')
                if len(items) > 0:
                    # 첫 번째 이미지의 URL을 가져옴
                    first_item = items[0]
                    image_url = first_item.find('link').text
                    print(f'First Image URL: {image_url}')
                    return image_url
                else:
                    print('검색 결과가 없습니다.')
                    return None
            else:
                print(f"API 호출 에러: {response.status_code}")
                return None

        except requests.exceptions.RequestException as e:
            print(f"Error while making a request: {e}")
            return None

    def save_to_database(self, data_list):
        for data in data_list:
            WikiDocument.objects.create(title=data['title'], image=data['image_url'], content=data['content'])
