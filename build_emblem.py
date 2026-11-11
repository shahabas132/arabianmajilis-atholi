import xml.etree.ElementTree as ET

# Page 21 Emblem
tree21 = ET.parse('_raw_assets/brand_svgs/page_21.svg')
root21 = tree21.getroot()
for g in root21.iter('{http://www.w3.org/2000/svg}g'):
    if g.attrib.get('clip-path') == 'url(#clip_2)':
        emblem_group = g
        break

paths_str = '\n'.join([ET.tostring(child, encoding='unicode') for child in emblem_group])
paths_str = paths_str.replace('fill="#ffffff"', 'fill="currentColor"').replace('stroke="#ffffff"', 'stroke="currentColor"')

emblem_tsx = f'''import React from 'react';

interface EmblemDiamondProps extends React.SVGProps<SVGSVGElement> {{
  className?: string;
}}

export const EmblemDiamond: React.FC<EmblemDiamondProps> = ({{ className = "w-24 h-24", ...props }}) => {{
  return (
    <svg
      viewBox="250 100 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={{className}}
      preserveAspectRatio="xMidYMid meet"
      {{...props}}
    >
      <g>
        {paths_str}
      </g>
    </svg>
  );
}};

export default EmblemDiamond;
'''

with open('src/components/brand/EmblemDiamond.tsx', 'w', encoding='utf-8') as f:
    f.write(emblem_tsx)
print('Generated EmblemDiamond.tsx successfully')
