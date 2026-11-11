import xml.etree.ElementTree as ET
import os

os.makedirs('src/components/brand', exist_ok=True)

# Parse page 15 (Monogram)
tree = ET.parse('_raw_assets/brand_svgs/page_15.svg')
root = tree.getroot()
ns = {'svg': 'http://www.w3.org/2000/svg'}

# Let's inspect all paths inside clip_2
clip_group = None
for g in root.iter('{http://www.w3.org/2000/svg}g'):
    if g.attrib.get('clip-path') == 'url(#clip_2)':
        clip_group = g
        break

if clip_group is not None:
    print('Found clip group for monogram with children:', len(clip_group))
    for child in clip_group:
        print(child.tag, child.attrib)
else:
    print('clip_group not found')

# Parse page 13 (Wordmark Horizontal)
tree13 = ET.parse('_raw_assets/brand_svgs/page_13.svg')
root13 = tree13.getroot()
clip13 = None
for g in root13.iter('{http://www.w3.org/2000/svg}g'):
    if g.attrib.get('clip-path') == 'url(#clip_2)':
        clip13 = g
        break
if clip13 is not None:
    print('Found clip group for wordmark with children:', len(clip13))
