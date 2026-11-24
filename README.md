# Reminders

A React and Redux reminder-list exercise with browser-local persistence.

## Features

- Create reminders with text and a date/time.
- Edit or remove individual reminders.
- Clear the full reminder list.
- Validate the required text and date fields.
- Show relative dates with Moment.js.
- Save reminders in localStorage so they can survive a page refresh in the same browser.

## Stack

React 17, JavaScript, Redux, Redux Thunk, Bootstrap 5, Moment.js and Create React App.

## Run locally

Requires Node.js and npm. From the repository directory:

```sh
npm install
npm start
```

Open `http://localhost:3000`.

```sh
npm run build
npm test
```

These are the configured build and test scripts. This older React Scripts 4 project may need a compatible Node.js environment or dependency updates.

## Source guide

- `src/App.js`: reminder form, validation and list actions.
- `src/components/UpdateReminderCard.js`: edit form.
- `src/redux/store/Test/`: reminder actions and reducer.

## Scope

This is a local frontend exercise. It does not send push notifications or email alerts, and it has no account system or cloud sync. Browser storage is not suitable for sensitive data. No production-readiness or current test-pass claim is made.
