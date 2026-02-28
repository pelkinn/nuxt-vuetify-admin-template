---
alwaysApply: true
---

# Frontend Development Rules

## General Principles

- Использовать TypeScript во всех новых файлах.
- Использовать Composition API (Vue).
- Писать чистый и читаемый код без избыточной абстракции.

## Project Structure

- components/ — переиспользуемые UI-компоненты
- pages/ — страницы приложения
- composables/ — бизнес-логика
- plugins/
- services/ — API клиенты
- stores/ — состояние приложения
- utils/ — чистые функции без зависимостей от UI
- types/ - типы
- enums/ - перечисления

## Components

- Один компонент — одна ответственность.
- Props должны быть строго типизированы.
- Не более 200–250 строк на компонент.
- Сложную логику выносить в composables.

## Styling

- Использовать scoped CSS в компонентах.
- Не писать inline-стили без необходимости.
- Использовать дизайн-токены (colors, spacing).
- Не писать кастомные стили, использовать vuetify

## State Management

- Локальный state — внутри компонента.
- Глобальный state — только при необходимости.
- Не хранить derived state — вычислять через computed/selectors.

## API & Data Fetching

- Все запросы через services слой.
- Не вызывать fetch/axios напрямую из UI-компонентов.
- Обрабатывать loading/error состояния.
- Использовать DTO/типы ответов API.
- Для получения данных использовать хуки Nuxt

## Performance

- Lazy loading страниц и тяжёлых компонентов.
- Использовать computed.
- Следить за размером бандла.

## Code Style

- eslint + prettier обязательны.
- Имена:
  - Components — PascalCase
  - variables/functions — camelCase
  - constants — UPPER_SNAKE_CASE
- Не использовать any без комментария.
- Не оверрайдить
- не писать дополнительную функцию для таких случаев
  BAD:
  `@click="goToSetup"

  function goToSetup() {
  router.push('/setup');
  }` GOOD:`@click="router.push('/setup')"`

## Security

- Санитизировать пользовательский ввод.
- Не хранить секреты во фронтенде.
- Проверять внешние URL.

## Documentation

- Сложная логика должна иметь краткий комментарий.
- README обновляется при изменении архитектуры.
