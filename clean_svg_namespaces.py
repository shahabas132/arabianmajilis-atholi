import re

def clean_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    # Replace <ns0:path with <path
    content = re.sub(r'<ns0:path\s+xmlns:ns0="[^"]*"', '<path', content)
    content = content.replace('<ns0:path', '<path')
    content = content.replace('</ns0:path>', '</path>')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

clean_file('src/components/brand/Monogram.tsx')
clean_file('src/components/brand/Wordmark.tsx')
print('Successfully cleaned namespace prefixes in Monogram.tsx and Wordmark.tsx!')
