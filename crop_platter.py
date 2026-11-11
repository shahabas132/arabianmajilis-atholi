from PIL import Image, ImageDraw, ImageFilter
import os

src_path = r'C:\Users\Shahabas Ahammed\.gemini\antigravity-ide\brain\32254e97-41cd-492a-9e00-f269d490261a\.user_uploaded\media_1792344321655.jpg'
img = Image.open(src_path).convert('RGBA')
width, height = img.size

# Save original full
os.makedirs('public/images', exist_ok=True)
img.convert('RGB').save('public/images/mandi-hero-platter-full.jpg', quality=95)

# Center of platter in 795x663 image:
# Looking at the platter:
# x is roughly centered: cx ~ 397
# y: the platter touches top around y ~ 15, bottom around y ~ 645, height ~ 630
# let's determine center and radius
cy = height / 2.0  # ~331.5
cx = width / 2.0   # ~397.5
# radius:
radius = min(width, height) / 2.0 - 15  # ~ 316.5

# Create high-res circular mask with antialiased edge
scale = 4
mask = Image.new('L', (width * scale, height * scale), 0)
draw = ImageDraw.Draw(mask)
cx_s = cx * scale
cy_s = cy * scale
r_s = radius * scale
draw.ellipse([cx_s - r_s, cy_s - r_s, cx_s + r_s, cy_s + r_s], fill=255)
mask = mask.resize((width, height), Image.LANCZOS)
mask = mask.filter(ImageFilter.GaussianBlur(1))

# Apply mask
out = Image.new('RGBA', (width, height), (0, 0, 0, 0))
out.paste(img, (0, 0), mask)

# Crop to square around the platter
crop_box = [int(cx - radius - 5), int(cy - radius - 5), int(cx + radius + 5), int(cy + radius + 5)]
cropped_platter = out.crop(crop_box)
cropped_platter.save('public/images/mandi-hero-platter.png', 'PNG')
print(f'Successfully saved public/images/mandi-hero-platter.png! Size: {cropped_platter.size}')
