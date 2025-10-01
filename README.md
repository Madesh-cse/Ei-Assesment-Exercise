# Exercise 1: Design Patterns

## 📌 Overview
This project demonstrates the understanding of **Software Design Patterns** through practical use cases coded in **TypeScript**.

Patterns are grouped into three categories:

1. **Behavioural Design Patterns** → Define communication and responsibilities between objects.  
2. **Creational Design Patterns** → Handle object creation in a flexible and reusable way.  
3. **Structural Design Patterns** → Deal with object composition.  

**Implemented Patterns:**
- 2 Behavioural Patterns → Observer, Strategy  
- 2 Creational Patterns → Singleton, Factory  
- 2 Structural Patterns → Adapter, Decorator  

---

## 🎭 Behavioural Design Patterns

### 1. Observer Pattern – Ride-Sharing App Notifications
**Problem:** A ride-sharing app must notify multiple users (riders, drivers, admins) whenever ride status changes.  

**Solution:** The Observer Pattern allows observers (users) to subscribe/unsubscribe from ride status updates. The ride (subject) automatically notifies all observers when its state changes.  

**Key Concepts:**
- Riders act as subjects, while drivers are observers subscribing for ride requests.  
- All subscribed drivers in the same location receive automatic notifications.  
- Loose coupling between riders and drivers.  

---

### 2. Strategy Pattern – CryptoBot Trading Strategy
**Problem:** A crypto trading bot should support different trading strategies (aggressive, conservative, balanced) and be able to switch strategies dynamically.  

**Solution:** The Strategy Pattern encapsulates each trading algorithm in its own class and lets the bot swap strategies at runtime.  

**Implemented Strategies:**
- **AggressiveStrategy** → Buy aggressively  
- **ConservativeStrategy** → Invest cautiously  
- **BalancedStrategy** → Buy and hold  

**Key Concepts:**
- Encapsulates algorithms in separate classes  
- Strategies interchangeable at runtime  
- Reduces conditional logic, promotes flexibility  

---

## 🏗️ Creational Design Patterns

### 1. Singleton Pattern – Cache Management System
**Problem:** Ensure only one cache instance exists to avoid inconsistency.  

**Solution:** The Singleton Pattern ensures a single instance of the cache manager exists and provides global access.  

**Key Concepts:**
- Single instance with global access  
- Centralized state management  
- Controls resource usage  

---

### 2. Factory Pattern – Role-Based Access Control
**Problem:** Different users (Admin, Editor, Viewer) have different access permissions. Hardcoding roles makes the code rigid.  

**Solution:** The Factory Pattern centralizes creation logic and returns the correct role object based on input.  

**Implemented Roles:**
- **Admin** → create, read, update, delete  
- **Editor** → read, update  
- **Viewer** → read  

**Key Concepts:**
- Centralizes object creation  
- Hides instantiation logic from client code  
- Flexible and scalable  

---

## 🧩 Structural Design Patterns

### 1. Adapter Pattern – Payment Gateway Adapter
**Problem:** Integrate multiple payment providers (PayPal, Stripe, Razorpay) with a common interface.  

**Key Concepts:**
- Adapts incompatible interfaces to a standard interface  
- Allows new providers to be added easily  
- Promotes code reusability and flexibility  
 

---

### 2. Decorator Pattern – Text Formatting Decorator
**Problem:** Dynamically add formatting (bold, italic, underline, color) to text.  

**Key Concepts:**
- Adds behavior dynamically without modifying the original class  
- Supports flexible, stacked, and combinable enhancements  
- Follows Open/Closed Principle  
 

---

## 🚀 How to Run the Programs

### 1. Install Dependencies

npm install

2. Run TypeScript Programs with ts-node (ESM)
# Behavioural Patterns
node --loader ts-node/esm DesignPattern/BehaviouralPatternDesign/Strategy-Pattern/main.ts
node --loader ts-node/esm DesignPattern/BehaviouralPatternDesign/Observer-Pattern/main.ts

# Creational Patterns
node --loader ts-node/esm DesignPattern/CreationalPatternDesign/Singleton/main.ts
node --loader ts-node/esm DesignPattern/CreationalPatternDesign/Factory/main.ts

# Structural Patterns
node --loader ts-node/esm DesignPattern/StructuralPatternDesign/Adapter/main.ts
node --loader ts-node/esm DesignPattern/StructuralPatternDesign/Decorator/main.ts


### 3. Run in Terminal 

   npm run start:strategy
   
   npm run start: observer
   

### 4. Clone Repository

git clone https://github.com/Madesh-cse/Ei-Assesment-Exercise.git

----------------------------------------------------------------------------------------------

### Exercise 2: Problem Statements for Mini-projects – Mars Rover Simulation

A TypeScript mini-project that simulates the movement of a Mars Rover on a grid.

📌 Problem Statement

The rover is placed on a rectangular grid.

It can move forward (M), turn left (L), or turn right (R).

Must detect obstacles and report its final position and orientation.

⚙️ Features

✅ Modular code (each class in its own file)

✅ Command Pattern to execute moves

✅ Logging mechanism with timestamps

✅ Exception handling for invalid inputs & grid boundaries

✅ Obstacle detection & safe movement

✅ No infinite loops (dynamic command input)

✅ Easily extensible for new features

Run Instructions

 1. Install dependencies:

   npm install

2. Run in development mode:

   npm run start

## Example Input:

Grid Size: 10 x 10

Starting Position: (0, 0, N)

Commands: MMRMLM

Obstacles: (2, 9), (5, 5)

## Example Output:

Final Position: (3, 2, E)

Status Report: "Rover is at (3, 2) facing East. No Obstacles detected."

