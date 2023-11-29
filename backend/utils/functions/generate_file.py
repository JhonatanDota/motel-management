import io
from PIL import Image


def generate_image(
    name: str = "new_image", width: int = 50, height: int = 50, extension: str = "jpeg"
) -> Image.Image:
    file = io.BytesIO()
    image = Image.new("RGB", size=(width, height))
    image.save(file, format=extension)

    file.name = f"{name}.{extension}"
    file.seek(0)

    return file
