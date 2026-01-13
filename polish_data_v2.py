import json
import random

# Load data
with open('/Users/steban/Projects/personal/ruppell/src/data.json', 'r') as f:
    data = json.load(f)

headlines = [
    "Descubre las técnicas más avanzadas para dominar esta habilidad y destacar en el mercado laboral actual.",
    "Una guía completa paso a paso diseñada por expertos para llevarte desde principiante hasta profesional.",
    "Transforma tu carrera profesional con conocimientos prácticos y aplicables desde la primera lección.",
    "Aprende los secretos mejor guardados de la industria y crea proyectos impactantes.",
    "Domina la teoría y la práctica con este curso intensivo que cambiará tu perspectiva.",
    "Desarrolla habilidades críticas y resuelve problemas complejos con metodología probada.",
    "El curso definitivo para quienes buscan excelencia y resultados tangibles.",
    "Potencia tu creatividad y mejora tus ingresos con nuevas competencias de alto valor.",
    "Conviértete en un referente en tu campo aprendiendo de los mejores mentores.",
    "Estrategias reales y casos de exito para aplicar inmediatamente en tu vida profesional."
]

for category in data['categories']:
    if 'courses' in category:
        for course in category['courses']:
             # Update Headline with longer text
            course['headline'] = random.choice(headlines)

# Save back
with open('/Users/steban/Projects/personal/ruppell/src/data.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Data polished: Longer headlines added.")
