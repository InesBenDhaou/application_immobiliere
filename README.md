

##  **CasaNova** 
Mini-application dédiée à la gestion des biens immobiliers.

---

## Table des matières
1. 🛠️ [Technologies utilisées](#tech-stack)
2. ✨ [Fonctionnalités](#features)
3. 🚀 [Démarrage rapide](#quick-start)
4. 🔧 [Améliorations possibles avec plus de temps](#ameliorations-possibles-avec-plus-de-temps)

---

## Technologies utilisées

**Backend (API)**  
- [Fastify](https://fastify.dev/) (Node.js framework, TypeScript)  
>Fastify assure un backend léger, performant et simple à étendre.

**Frontend (Web App)**  
- [React](https://react.dev/) (TypeScript)     
>React permet une interface moderne, réactive et facilement évolutive, et l’utilisation de Material-UI améliore encore la responsivité et l’ergonomie de l’application.
---

## Fonctionnalités

- **Gestion des immobilières**
  - Consultation des biens
    - Filtrage par titre
    - Filtrage par prix (croissant / décroissant)
    - Filtrage par surface (minimale / maximale)
  - Modification d’un bien immobilier 
  - Création d’un nouveau bien immobilier
  - Suppression d’un bien immobilier

---

## Démarrage rapide

Suivez ces étapes pour configurer le projet localement sur votre machine.

**Prérequis**

Assurez-vous d’avoir les éléments suivants installés sur votre machine :

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/InesBenDhaou/application_immobiliere.git
cd application_immobiliere
```

### 2️⃣ Database Setup 

Pour un démarrage fluide, j’utilise un fichier JSON contenant la base de données, ne vous inquiétez pas.

### 3️⃣ Backend Setup 

run the backend server :

```bash
cd backend
npm install
npm run dev
```

### 4️⃣ Frontend Setup 

Le frontend utilise Vite, un outil de build moderne offrant un démarrage rapide et un développement plus fluide.

```bash
cd frontend
npm install
npm run dev 
```
---

## Améliorations possibles avec plus de temps

- Remplacer le fichier JSON par une vraie base de données (PostgreSQL ou MySQL) pour une gestion plus robuste et évolutive des données.

- Enrichir les publications des biens immobiliers avec des **images** et d’autres détails visuels pour mieux présenter chaque bien ainsi un **système de favoris** pour marquer des biens à revisiter.

- Enrichir le système de filtrage avec des critères **géographiques** (ville, quartier) et une carte interactive pour une recherche plus précise des biens.

- Enrichir l’application en intégrant **différents acteurs** (admin, agent, visiteur) avec des rôles séparés via des guards et un système d’authentification sécurisé.

















