import json
import random

# Load data
with open('/Users/steban/Projects/personal/ruppell/src/data.json', 'r') as f:
    data = json.load(f)

headlines = [
    "Domina esta habilidad en tiempo récord",
    "Aprende de los mejores expertos del mundo",
    "Impulsa tu carrera al siguiente nivel",
    "Desde cero hasta nivel experto",
    "La guía definitiva y práctica",
    "Transforma tu futuro profesional",
    "Secretos revelados por profesionales",
    "Crea proyectos increíbles desde hoy",
    "Domina la teoría y la práctica",
    "Tu camino hacia el éxito empieza aquí"
]

def format_cop(value):
    return value  # We will store as number, format in UI

for category in data['categories']:
    if 'courses' in category:
        for course in category['courses']:
            # 1. Update Price to COP (approx 50k - 500k)
            # stored as raw number for filtering, will format in UI
            course['price'] = random.randint(5, 50) * 10000 
            
            # 2. Update Duration (0 - 100h)
            course['duration'] = round(random.uniform(2.0, 100.0), 1)
            
            # 3. Add Headline
            course['headline'] = random.choice(headlines)

# Save back
with open('/Users/steban/Projects/personal/ruppell/src/data.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Data polished: COP prices, extended durations, and headlines added.")
