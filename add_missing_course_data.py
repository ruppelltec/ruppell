#!/usr/bin/env python3
"""
Script to add missing introVideoUrl and introText to courses in data.json
"""
import json
import random

# List of educational YouTube videos to use as placeholders
PLACEHOLDER_VIDEOS = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/Y8Tko2YC5hA",
    "https://www.youtube.com/embed/WTFZjyy1y2M",
    "https://www.youtube.com/embed/L_LUpnjgPso",
    "https://www.youtube.com/embed/6Af6b_wyiwI",
    "https://www.youtube.com/embed/iqKdEhx-dD4",
    "https://www.youtube.com/embed/gfmjMWjn-Xg",
]

def generate_intro_text(course_title, expert, category_title):
    """Generate a realistic intro text for the course"""
    templates = [
        f"Domina {course_title.lower()} con {expert}, uno de los expertos más reconocidos en {category_title.lower()}. Este curso te llevará desde los fundamentos hasta técnicas avanzadas, proporcionándote las herramientas necesarias para destacar en tu campo profesional.",
        
        f"Aprende {course_title.lower()} de la mano de {expert}. Este programa intensivo combina teoría y práctica para que puedas aplicar inmediatamente lo aprendido en situaciones reales. Perfecto para quienes buscan resultados tangibles.",
        
        f"En este curso de {course_title.lower()}, {expert} te guiará a través de un recorrido completo que transformará tu manera de abordar {category_title.lower()}. Con ejercicios prácticos y casos de estudio, desarrollarás habilidades que el mercado demanda.",
        
        f"Descubre los secretos de {course_title.lower()} con {expert}. Este curso está diseñado para proporcionarte conocimientos profundos y habilidades prácticas que te permitirán sobresalir en {category_title.lower()}.",
        
        f"{expert} te enseña todo sobre {course_title.lower()} en este programa completo. Desde conceptos básicos hasta estrategias avanzadas, aprenderás las mejores prácticas de la industria y cómo aplicarlas en tu carrera profesional.",
    ]
    
    return random.choice(templates)

def add_missing_data(data):
    """Add missing introVideoUrl and introText to courses"""
    updated_count = 0
    
    for category in data['categories']:
        category_title = category.get('title', 'esta disciplina')
        
        for course in category.get('courses', []):
            course_updated = False
            
            # Add introVideoUrl if missing
            if 'introVideoUrl' not in course:
                course['introVideoUrl'] = random.choice(PLACEHOLDER_VIDEOS)
                course_updated = True
            
            # Add introText if missing
            if 'introText' not in course:
                course['introText'] = generate_intro_text(
                    course.get('title', 'este tema'),
                    course.get('expert', 'nuestro experto'),
                    category_title
                )
                course_updated = True
            
            # Add paymentLink if missing (using a placeholder)
            if 'paymentLink' not in course:
                course['paymentLink'] = f"https://example.com/payment/{course.get('id', 'unknown')}"
                course_updated = True
            
            if course_updated:
                updated_count += 1
    
    return updated_count

def main():
    # Read the data file
    with open('src/data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Add missing data
    updated_count = add_missing_data(data)
    
    # Write back to file
    with open('src/data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)
    
    print(f"✅ Successfully updated {updated_count} courses")
    print(f"✅ All courses now have introVideoUrl, introText, and paymentLink")

if __name__ == '__main__':
    main()
