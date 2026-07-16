from imagekitio import ImageKit
from .setting import setting

imagekit = ImageKit(
    private_key=setting.IMAGE_KIT_PRIVATE_KEY,
    public_key=setting.IMAGE_KIT_PUBLIC_KEY,
    url_endpoint=setting.IMAGE_KIT_URL
)