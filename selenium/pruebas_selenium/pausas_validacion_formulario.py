from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()

try:
    driver.get("http://localhost:5173/register")

    seleccion = driver.find_element(By.ID, "name")
    seleccion.clear()
    seleccion.send_keys("Erik Porroa")

    email = driver.find_element(By.ID, "email")
    email.clear()
    email.send_keys("eporroa@ejemplo.com")

    tel = driver.find_element(By.ID, "phone")
    tel.clear()
    tel.send_keys("555-2233")

    pass_1 = driver.find_element(By.ID, "password")
    pass_1.clear()
    pass_1.send_keys("password123")

    pass_2 = driver.find_element(By.ID, "confirmPassword")
    pass_2.clear()
    pass_2.send_keys("password123")


    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    time.sleep(2)

    envio = driver.find_element(By.XPATH, "//button[text()='Registrar']")
    envio.click()

    time.sleep(2)

    mensaje_confirmacion = driver.find_element(By.CLASS_NAME, "alert-success")

    print("La prueba pasó exitosamente.")

except Exception as e:
    print(f"Error en la prueba: {e}")

finally:
    driver.quit()