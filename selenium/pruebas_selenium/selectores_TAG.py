from selenium import webdriver
from selenium.webdriver.common.by import By


driver = webdriver.Chrome()

try:
    driver.get("http://localhost:5173/")

    titular_interno = driver.find_elements(By.TAG_NAME, "h5")

    assert len(titular_interno) == 3, f"Se encontraron {len(titular_interno)} elementos, pero se esperaban 3."

    image = driver.find_element(By.ID , "imagen01")
    alt_attribute = image.get_attribute("alt")

    assert alt_attribute is not None, "La imagen no tiene el atributo 'alt'."

    print("La prueba pasó exitosamente.")


except Exception as e:
    print(f"Error en la prueba: {e}")

finally:
    driver.quit()