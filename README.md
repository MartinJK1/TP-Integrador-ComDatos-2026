# TP Integrador: Codificación de Datos (Grupo 10)

Proyecto desarrollado para la cátedra de **Comunicaciones de Datos**. Esta aplicación web permite la codificación y decodificación de texto utilizando los algoritmos de **Huffman** y **Shannon-Fano**, además de calcular métricas fundamentales de teoría de la información.

## 🚀 Funcionalidades
- **Codificación:** Implementación de los algoritmos de Huffman y Shannon-Fano para la generación de códigos binarios óptimos.
- **Análisis de Datos:** Cálculo de frecuencias, probabilidades, entropía, información mutua y longitud promedio de los códigos.
- **Decodificación:** Sistema de traducción inverso para recuperar el texto original a partir del mensaje codificado.
- **Interfaz Dinámica:** Visualización de resultados en tiempo real y descarga de archivos `.txt`.

## 🛠️ Tecnologías
- **Frontend:** HTML5, CSS3, JavaScript (ES6 Modules).
- **Herramientas:** jQuery para manipulación de DOM, Vercel para despliegue continuo.

## 📁 Estructura del Proyecto
- `Main.js`: Orquestador principal de la lógica y eventos.
- `Huffman.js` / `ShannonFano.js`: Algoritmos de codificación.
- `Frecuencia.js` / `Probabilidades.js`: Procesamiento de los datos de entrada.
- `EntropíaTotal.js` / `InfoMutua.js` / `LongitudPromedio.js`: Módulos de cálculo matemático.

## 💡 Cómo usarlo
1. Ingresa el texto en la caja principal o carga un archivo `.txt`.
2. Presiona "Analizar texto" para generar la tabla de frecuencias, códigos y métricas de eficiencia.
3. Observa el "Mensaje codificado" generado.
4. Presiona "Decodificar" para verificar la integridad de la recuperación del texto.

---
*Desarrollado para la UTN FRLP - 2026*
