# MEAN Stack Beispielanwendung

Eine vollständige CRUD-Anwendung (Create, Read, Update, Delete) für Mitarbeiterverwaltung, gebaut mit dem MEAN Stack (MongoDB, Express.js, Angular, Node.js).

## 📋 Inhaltsverzeichnis

- [Überblick](#überblick)
- [Technologie-Stack](#technologie-stack)
- [Voraussetzungen](#voraussetzungen)
- [Installation](#installation)
- [Konfiguration](#konfiguration)
- [Verwendung](#verwendung)
- [Projektstruktur](#projektstruktur)
- [API-Endpunkte](#api-endpunkte)
- [Entwicklung](#entwicklung)
- [Tests](#tests)
- [Build](#build)
- [Docker](#docker)
- [Lizenz](#lizenz)
- [Mitwirkende](#mitwirkende)

## 🎯 Überblick

Diese Anwendung demonstriert eine moderne Implementierung des MEAN Stacks mit TypeScript. Sie ermöglicht die vollständige Verwaltung von Mitarbeiterdaten mit folgenden Funktionen:

- ✅ Mitarbeiter erstellen
- 📖 Mitarbeiter anzeigen
- ✏️ Mitarbeiter aktualisieren
- 🗑️ Mitarbeiter löschen

Die Anwendung verwendet MongoDB Atlas für die Datenverwaltung und implementiert Schema-Validierung für Datenintegrität.

## 🛠️ Technologie-Stack

### Backend
- **Node.js** - JavaScript-Laufzeitumgebung
- **Express.js** - Web-Framework für Node.js
- **MongoDB** - NoSQL-Datenbank
- **TypeScript** - Typisierte Obermenge von JavaScript

### Frontend
- **Angular 17** - Frontend-Framework
- **Angular Material** - UI-Komponenten-Bibliothek
- **RxJS** - Reaktive Programmierung
- **TypeScript** - Typisierte Obermenge von JavaScript

### Entwicklungswerkzeuge
- **ESLint** - Code-Linting
- **Jasmine/Karma** - Testing-Framework
- **Docker** - Containerisierung
- **ts-node** - TypeScript-Ausführung

## 📦 Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass folgende Software installiert ist:

- **Node.js** (Version 18 oder höher)
- **npm** (Version 8 oder höher)
- **MongoDB Atlas Konto** oder lokale MongoDB-Installation
- **Git** - Versionskontrolle

## 🚀 Installation

1. **Repository klonen:**
```bash
git clone https://github.com/tjsingh85/node-mongodb.git
cd node-mongodb
```

2. **Abhängigkeiten installieren:**
```bash
npm run prepare
```

Dieser Befehl installiert automatisch alle Abhängigkeiten sowohl für den Server als auch für den Client.

## ⚙️ Konfiguration

### MongoDB-Verbindung einrichten

1. Erstellen Sie eine `.env` Datei im `server` Verzeichnis:
```bash
cd server
touch .env
```

2. Fügen Sie Ihre MongoDB-Verbindungszeichenfolge hinzu:
```env
ATLAS_URI=mongodb+srv://<benutzername>:<passwort>@<cluster>.mongodb.net/?retryWrites=true&w=majority
```

**Hinweis:** Ersetzen Sie `<benutzername>`, `<passwort>` und `<cluster>` mit Ihren tatsächlichen MongoDB Atlas-Anmeldedaten.

### MongoDB Atlas einrichten

1. Gehen Sie zu [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Erstellen Sie ein kostenloses Cluster
3. Erstellen Sie einen Datenbankbenutzer
4. Fügen Sie Ihre IP-Adresse zur Whitelist hinzu
5. Kopieren Sie die Verbindungszeichenfolge

## 🎮 Verwendung

### Die gesamte Anwendung starten

```bash
npm start
```

Dieser Befehl startet sowohl den Backend-Server als auch die Frontend-Anwendung:
- **Backend:** http://localhost:5200
- **Frontend:** http://localhost:4200

### Server separat starten

```bash
npm run start:server
```

### Client separat starten

```bash
npm run start:client
```

## 📁 Projektstruktur

```
node-mongodb/
├── client/                    # Angular Frontend-Anwendung
│   ├── src/
│   │   ├── app/              # Angular-Komponenten und Services
│   │   ├── assets/           # Statische Dateien
│   │   └── styles.css        # Globale Styles
│   ├── angular.json          # Angular-Konfiguration
│   ├── package.json          # Client-Abhängigkeiten
│   └── tsconfig.json         # TypeScript-Konfiguration
│
├── server/                    # Express Backend-Anwendung
│   ├── src/
│   │   ├── server.ts         # Haupt-Server-Einstiegspunkt
│   │   ├── database.ts       # MongoDB-Verbindung und Schema
│   │   ├── employee.routes.ts # API-Routen
│   │   └── employee.ts       # Mitarbeiter-Datenmodell
│   ├── .env                  # Umgebungsvariablen (nicht versioniert)
│   ├── package.json          # Server-Abhängigkeiten
│   └── tsconfig.json         # TypeScript-Konfiguration
│
├── package.json              # Root-Package mit Scripts
├── README.md                 # Englische Dokumentation
├── README_DE.md              # Deutsche Dokumentation (diese Datei)
└── LICENSE                   # Apache 2.0 Lizenz
```

## 🔌 API-Endpunkte

Die REST API bietet folgende Endpunkte:

### Alle Mitarbeiter abrufen
```http
GET /employees
```
**Antwort:** Array von Mitarbeiter-Objekten

### Einzelnen Mitarbeiter abrufen
```http
GET /employees/:id
```
**Parameter:** `id` - MongoDB ObjectId des Mitarbeiters

### Neuen Mitarbeiter erstellen
```http
POST /employees
Content-Type: application/json

{
  "name": "Max Mustermann",
  "position": "Software Engineer",
  "level": "mid"
}
```
**Body-Parameter:**
- `name` (string, erforderlich) - Name des Mitarbeiters
- `position` (string, erforderlich, min. 5 Zeichen) - Position
- `level` (string, erforderlich) - Erfahrungsstufe: "junior", "mid", oder "senior"

### Mitarbeiter aktualisieren
```http
PUT /employees/:id
Content-Type: application/json

{
  "name": "Max Mustermann",
  "position": "Senior Software Engineer",
  "level": "senior"
}
```

### Mitarbeiter löschen
```http
DELETE /employees/:id
```

## 👨‍💻 Entwicklung

### Code-Linting

**Server-Code prüfen:**
```bash
npm run test:server
```

**Client-Code prüfen:**
```bash
npm run test:client
```

**Beide prüfen:**
```bash
npm test
```

### Entwicklungsmodus mit Live-Reload

**Server mit ts-node:**
```bash
cd server
npm start
```

**Angular mit Live-Reload:**
```bash
cd client
npm start
```

## 🧪 Tests

Die Anwendung verwendet ESLint für statische Code-Analyse und Jasmine/Karma für Unit-Tests.

```bash
# Alle Tests ausführen
npm test

# Nur Server-Tests
npm run test:server

# Nur Client-Tests
npm run test:client
```

## 🏗️ Build

### Produktions-Build erstellen

```bash
npm run build
```

Dieser Befehl:
1. Installiert alle Abhängigkeiten
2. Kompiliert den TypeScript-Server-Code
3. Erstellt einen optimierten Angular-Produktions-Build

### Einzelne Builds

**Server bauen:**
```bash
npm run build:server
```

**Client bauen:**
```bash
npm run build:client
```

## 🐳 Docker

Die Anwendung enthält Dockerfile-Konfigurationen für Server und Client.

### Server-Container erstellen und ausführen

```bash
cd server
docker build -t mean-stack-server .
docker run -p 5200:5200 --env-file .env mean-stack-server
```

### Client-Container erstellen und ausführen

```bash
cd client
docker build -t mean-stack-client .
docker run -p 80:80 mean-stack-client
```

## 📄 Lizenz

Dieses Projekt ist unter der Apache 2.0 Lizenz lizenziert. Siehe die [LICENSE](LICENSE) Datei für Details.

## 👥 Mitwirkende

- **Abirami Sukumaran** - [GitHub](https://github.com/AbiramiSukumaran)
- **Stanimira Vlaeva** - [GitHub](https://github.com/sis0k0)
- **Jesse Hall (@codeSTACKr)** - [GitHub](https://github.com/codeSTACKr)

## 🔗 Zusätzliche Ressourcen

- [MongoDB Atlas Dokumentation](https://docs.atlas.mongodb.com/)
- [Angular Dokumentation](https://angular.io/docs)
- [Express.js Dokumentation](https://expressjs.com/)
- [TypeScript Dokumentation](https://www.typescriptlang.org/docs/)
- [Node.js Dokumentation](https://nodejs.org/docs/)

## 💡 Fehlerbehebung

### Häufige Probleme

**Problem:** Server startet nicht
- **Lösung:** Überprüfen Sie, ob die `.env` Datei korrekt konfiguriert ist und die MongoDB-Verbindungszeichenfolge gültig ist.

**Problem:** Verbindung zu MongoDB schlägt fehl
- **Lösung:** 
  - Stellen Sie sicher, dass Ihre IP-Adresse in MongoDB Atlas zur Whitelist hinzugefügt wurde
  - Überprüfen Sie Benutzername und Passwort in der Verbindungszeichenfolge
  - Vergewissern Sie sich, dass Ihr Cluster läuft

**Problem:** Port 5200 oder 4200 bereits belegt
- **Lösung:** Ändern Sie den Port in `server/src/server.ts` (Backend) oder `client/angular.json` (Frontend)

**Problem:** `npm install` schlägt fehl
- **Lösung:** 
  - Löschen Sie `node_modules` und `package-lock.json`
  - Führen Sie `npm cache clean --force` aus
  - Versuchen Sie die Installation erneut

## 🤝 Beitragen

Beiträge sind willkommen! Bitte erstellen Sie einen Fork des Repositories und reichen Sie einen Pull Request ein.

1. Forken Sie das Projekt
2. Erstellen Sie einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committen Sie Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Pushen Sie zum Branch (`git push origin feature/AmazingFeature`)
5. Öffnen Sie einen Pull Request

---

**Hinweis:** Diese Dokumentation ist auch in [Englisch](README.md) verfügbar.

Viel Erfolg beim Entwickeln! 🚀
