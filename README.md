Exercise 1: Design Patterns
📌 Overview

This project demonstrates the understanding of Software Design Patterns through practical use cases coded in TypeScript.

Patterns are grouped into three categories:

 1.Behavioural Design Patterns → Define communication and responsibilities between objects.

 2.Creational Design Patterns → Handle object creation in a flexible and reusable way.

 3.Structural Design Patterns → Deal with object composition (to be implemented).

In this assignment:

 1.Implemented 2 Behavioural Patterns → Observer, Strategy

2. Implemented 2 Creational Patterns → Singleton, Factory

3. Implemented 2 Structural  Patterns → Adapter, Decorator

-----------------------------------------------------------------------------------------------------------------------------

🎭 Behavioural Design Patterns
1. Observer Pattern – Ride-Sharing App Notifications

Problem: A ride-sharing app must notify multiple users (riders, drivers, admins) whenever ride status changes.

Solution: The Observer Pattern allows observers (users) to subscribe/unsubscribe from ride status updates. The ride (subject) automatically notifies all observers when its state changes.

🔑 Key Concepts

Riders act as subjects, while drivers are observers that subscribe for ride requests.

When a rider requests a driver, all subscribed drivers in the same location get automatic notifications.

The design ensures loose coupling, since riders don’t directly depend on driver logic.


2. Strategy Pattern – CryptoBot Trading Strategy

Problem: A crypto trading bot should support different trading strategies (aggressive, conservative, balanced) and be able to switch strategies dynamically.

Solution: The Strategy Pattern encapsulates each trading algorithm in its own class and lets the bot swap strategies at runtime.

Implemented Strategies:

1.AggressiveStrategy → Buy more aggressively

2.ConservativeStrategy → Invest cautiously

---------------------------------------------------------------------------------------------

🏗️ Creational Design Patterns
1. Singleton Pattern – Cache Management System

Problem: A cache system should be shared across the whole application. Multiple instances would lead to inconsistency.

Solution: The Singleton Pattern ensures only one instance of the cache manager exists.


2. Factory Pattern – Role-Based Access Control

Problem: Different users (Admin, Editor, Viewer) have different access permissions. Hardcoding roles makes the code rigid.

Solution: The Factory Pattern centralizes creation logic and returns the correct role object based on input.

Roles Implemented:

Admin → create, read, update, delete

Editor → read, update

Viewer → read

--------------------------------------------------------------------------------------------------------------

🧩 Structural Design Patterns

1. Adapter Pattern – Payment Gateway Adapter

   Problem: Integrate multiple payment providers (PayPal, Stripe, Razorpay) with a common interface.
   Key Concepts:

   Adapts incompatible interfaces to a standard interface

   Allows new payment providers to be added easily

   Promotes code reusability and flexibility

2. Decorator Pattern – Text Formatting Decorator

   Problem: Dynamically add formatting (bold, italic, underline, color) to text.
   Key Concepts:

   Adds behavior to objects dynamically without modifying the original class

   Supports flexible, stacked, and combinable enhancements

   Follows Open/Closed Principle

 ----------------------------------------------------------------------------------------------------

 How to Run a TypeScript Program with ts-node (ESM)

  1. Install ts-node and TypeScript (if not already installed)
     npm install -D ts-node typescript
     
  2. Run the program using the ESM loader:
     node --loader ts-node/esm path/to/your/file.ts

  3. Example for your Strategy Pattern program:
     node --loader ts-node/esm DesignPattern/BehaviouralPatternDesign/Strategy-Pattern/main.ts

    
