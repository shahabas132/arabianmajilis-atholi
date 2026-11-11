import xml.etree.ElementTree as ET
import re

# In PDF coordinates: matrix(1, 0, 0, -1, tx, ty)
# To convert to SVG native coordinates without inversion:
# x_svg = tx + x_local
# y_svg = ty - y_local  (because y is inverted by -1)
# Or we can simply wrap the paths in <g transform="translate(-minX, -minY)"> inside an SVG with viewBox="0 0 W H"

# Monogram elements
# The original page viewBox was 0 0 800 500.
# The clip group contains all paths.
# Let's inspect the exact minX, minY, maxX, maxY for Monogram and Wordmark:

tree15 = ET.parse('_raw_assets/brand_svgs/page_15.svg')
root15 = tree15.getroot()
for g in root15.iter('{http://www.w3.org/2000/svg}g'):
    if g.attrib.get('clip-path') == 'url(#clip_2)':
        monogram_group = g
        break

tree13 = ET.parse('_raw_assets/brand_svgs/page_13.svg')
root13 = tree13.getroot()
for g in root13.iter('{http://www.w3.org/2000/svg}g'):
    if g.attrib.get('clip-path') == 'url(#clip_2)':
        wordmark_group = g
        break

# Monogram bounds in page coords (x is roughly 320 to 480, y is roughly 210 to 345)
# In page 15, let's look at the paths:
# minX approx 320, maxX approx 480 (W=160), minY approx 210, maxY approx 345 (H=135)
# Let's verify and create standalone components

monogram_paths_str = '\n'.join([ET.tostring(child, encoding='unicode') for child in monogram_group])
# Replace fill="#ffffff" and stroke="#ffffff" with "currentColor" so it supports Tailwind colors!
monogram_paths_str = monogram_paths_str.replace('fill="#ffffff"', 'fill="currentColor"').replace('stroke="#ffffff"', 'stroke="currentColor"')

wordmark_paths_str = '\n'.join([ET.tostring(child, encoding='unicode') for child in wordmark_group])
wordmark_paths_str = wordmark_paths_str.replace('fill="#ffffff"', 'fill="currentColor"')

# Let's write Monogram.tsx
monogram_tsx = f'''import React from 'react';

interface MonogramProps extends React.SVGProps<SVGSVGElement> {{
  className?: string;
}}

export const Monogram: React.FC<MonogramProps> = ({{ className = "w-12 h-12", ...props }}) => {{
  return (
    <svg
      viewBox="320 215 160 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={{className}}
      preserveAspectRatio="xMidYMid meet"
      {{...props}}
    >
      <g>
        {monogram_paths_str}
      </g>
    </svg>
  );
}};

export default Monogram;
'''

with open('src/components/brand/Monogram.tsx', 'w', encoding='utf-8') as f:
    f.write(monogram_tsx)

# Wordmark bounds in page 13:
# First letter at x ~ 125, last letter at x ~ 670, y from ~ 205 to ~ 335
wordmark_tsx = f'''import React from 'react';

interface WordmarkProps extends React.SVGProps<SVGSVGElement> {{
  className?: string;
}}

export const Wordmark: React.FC<WordmarkProps> = ({{ className = "w-64 h-auto", ...props }}) => {{
  return (
    <svg
      viewBox="120 205 550 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={{className}}
      preserveAspectRatio="xMidYMid meet"
      {{...props}}
    >
      <g>
        {wordmark_paths_str}
      </g>
    </svg>
  );
}};

export default Wordmark;
'''

with open('src/components/brand/Wordmark.tsx', 'w', encoding='utf-8') as f:
    f.write(wordmark_tsx)

# BrandDiamond component
brand_diamond_tsx = '''import React from 'react';

interface BrandDiamondProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export const BrandDiamond: React.FC<BrandDiamondProps> = ({ 
  className = "w-3 h-3 text-gold-400", 
  size = 12,
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M6 0L12 6L6 12L0 6L6 0Z" />
    </svg>
  );
};

export default BrandDiamond;
'''

with open('src/components/brand/BrandDiamond.tsx', 'w', encoding='utf-8') as f:
    f.write(brand_diamond_tsx)

print('Successfully generated Monogram.tsx, Wordmark.tsx, and BrandDiamond.tsx!')
