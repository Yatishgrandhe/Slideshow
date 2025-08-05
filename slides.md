# Python Basics - Novakinetix Academy
## 🐍 Complete Programming Course

---

# Slide 1: What is Python?

## 🐍 Introduction to Python Programming

### What is Python?
Python is a **high-level, interpreted programming language** created by Guido van Rossum in 1991. It emphasizes **readability and simplicity**, making it perfect for beginners and experts alike.

**Think of it like this:**
- **High-level:** Imagine you're giving instructions to a friend. You'd say "make me a sandwich," not "pick up the knife, slice the bread...". Python is like talking to a friend; it's closer to human language.
- **Interpreted:** An interpreter reads your Python code line by line and executes it immediately. It's like having a translator who translates your sentences one at a time, instead of waiting for you to finish your whole speech before translating. This makes it faster to test small pieces of code.

### Key Features:
- **High-level language** - Closer to human language than machine code
- **Interpreted** - Code runs directly without compilation
- **Cross-platform** - Works on Windows, macOS, Linux
- **Open-source** - Free to use and modify
- **Extensive libraries** - Rich ecosystem of packages

### Why Python is Popular:
- **Web Development** - Django, Flask, FastAPI
- **Data Science** - Pandas, NumPy, Matplotlib
- **Machine Learning** - TensorFlow, PyTorch, Scikit-learn
- **Automation** - Scripts, bots, task automation
- **Game Development** - Pygame, Arcade
- **Desktop Applications** - Tkinter, PyQt, Kivy

### The Zen of Python:
The guiding principles of Python are summed up in a poem called "The Zen of Python." You can read it by typing `import this` into a Python interpreter. Here are some key ideas:
- Beautiful is better than ugly.
- Explicit is better than implicit.
- Simple is better than complex.
- Readability counts.

### Python Philosophy:
```python
# Simple and readable
print("Hello, World!")

# Powerful and versatile
import pandas as pd
import numpy as np

# Great for beginners
for i in range(5):
    print(f"Learning Python is fun!")

# Professional applications
def analyze_data(data):
    return data.describe()
```

### Python vs Other Languages:
| Feature | Python | Java | C++ |
|---------|--------|------|-----|
| **Syntax** | Simple, readable | Verbose | Complex |
| **Learning Curve** | Gentle | Steep | Very steep |
| **Speed** | Slower | Fast | Very fast |
| **Libraries** | Extensive | Good | Good |
| **Community** | Large, friendly | Large | Large |

### Real-World Applications:
- **Google** - YouTube, Google Search
- **Netflix** - Recommendation algorithms
- **Instagram** - Backend services
- **NASA** - Data analysis and automation
- **Spotify** - Music recommendation
- **Uber** - Machine learning models

---

# Slide 2: Installing and Running Python

## 🚀 Getting Started with Python

### Step 1: Download Python
- Visit [python.org](https://python.org) - Official website
- Download the **latest stable version** (currently 3.12.x)
- Choose the appropriate installer for your OS
- **Windows**: Download .exe installer
- **macOS**: Download .pkg installer
- **Linux**: Use package manager (apt, yum, etc.)

**Pro-Tip:** Always download from the official website to avoid security risks.

### Step 2: Installation Process
**Windows:**
- Run the installer as administrator
- **IMPORTANT:** Check the box that says "Add Python to PATH." This will make it much easier to run Python from the command line.
- Choose "Install for all users"

**macOS:**
- Double-click the .pkg file
- Follow the installation wizard
- Python is automatically added to PATH

**Linux:**
```bash
sudo apt update
sudo apt install python3 python3-pip
```

### Step 3: Choose an Editor/IDE
**Free Options:**
- **VS Code** - Popular, feature-rich, extensions
- **PyCharm Community** - Professional IDE
- **IDLE** - Python's built-in editor
- **Sublime Text** - Fast, lightweight
- **Atom** - Hackable text editor

**Online Options:**
- **Replit** - Browser-based development
- **Google Colab** - Jupyter notebooks
- **JupyterLab** - Interactive computing
- **GitHub Codespaces** - Cloud development

### Step 4: Verify Installation
```bash
# Check Python version
python --version
# or
python3 --version

# Check pip (package installer)
pip --version

# Test Python
python
>>> print("Hello, World!")
>>> exit()
```

### Step 5: Run Your First Program
**Method 1: Command Line**
```bash
# Create a file
echo 'print("Hello, World!")' > hello.py

# Run it
python hello.py
```

**Method 2: Interactive Mode**
```bash
python
>>> print("Hello, World!")
>>> 2 + 2
>>> exit()
```

### Step 6: Install Additional Tools
```bash
# Install virtual environment
pip install virtualenv

# Install popular packages
pip install requests pandas numpy matplotlib

# Create virtual environment
python -m venv myproject
source myproject/bin/activate  # On Windows: myproject\Scripts\activate
```

### Troubleshooting Common Issues:
- **"python not found"** - Add Python to PATH
- **Permission errors** - Run as administrator
- **Version conflicts** - Use virtual environments
- **Package installation fails** - Upgrade pip: `pip install --upgrade pip`

---

# Slide 3: Your First Python Program

## 🎯 Hello, World!

### Basic Syntax
```python
print("Hello, World!")
```

### Breaking it down:
- `print`: This is a built-in Python **function**. A function is a reusable block of code that performs a specific task. The `print` function's job is to display output to the screen.
- `()`: The parentheses are used to call the function and pass information to it.
- `"Hello, World!"`: This is a **string**, which is just a sequence of characters. We pass this string to the `print` function as an **argument**, which is the data the function will work with.

### Key Concepts:
- **Print Function** - Displays text to the console
- **Indentation** - Python uses indentation for code blocks (more on this later!)
- **Strings** - Text enclosed in quotes
- **Comments** - Lines starting with `#` are comments. Python ignores them, but they are useful for explaining your code to other people (and your future self!).
  ```python
  # This is a comment. It won't be executed.
  print("This will be.")
  ```

---

# Slide 4: Variables and Assignment

## 📦 Storing Data in Python

### What are Variables?
Variables are **containers for storing data values**. Think of them as labeled boxes or jars where you can put different types of information. You give the box a name (the variable name), and you can put things inside it (the value). You can also change what's inside the box.

**Another analogy:** A variable is like a contact in your phone. The name of the contact is the variable name (e.g., "Mom"), and the phone number is the value (e.g., "555-1234").

### Dynamic Typing
Python uses **dynamic typing**, meaning you don't need to declare the type of a variable. Python automatically determines the type based on the value you assign. It's smart enough to know that `5` is a number and `"hello"` is text.

```python
# String variables
name = "Alice"           # Text data
email = "alice@email.com"
message = "Hello, World!"

# Numeric variables
age = 25                 # Integer (whole number)
height = 5.8             # Float (decimal number)
temperature = -5.2        # Negative float
population = 8000000000  # Large integer

# Boolean variables
is_student = True        # True/False values
is_active = False
has_permission = True

# Complex data types
scores = [85, 92, 78]   # List
person = {"name": "Bob", "age": 30}  # Dictionary
```

### Assignment Operator (=)
The `=` operator assigns values to variables.

```python
# Basic assignment
x = 10
y = "Hello"
z = x + 5  # z becomes 15

# Multiple assignment
a, b, c = 1, 2, 3

# Same value to multiple variables
x = y = z = 0

# Unpacking
name, age, city = "Alice", 25, "New York"
```

### Variable Naming Rules:
**✅ Allowed:**
- Start with letter or underscore: `name`, `_private`
- Can contain letters, numbers, underscores: `user_name`, `age2`
- Case sensitive: `Name` and `name` are different
- Use descriptive names: `student_count`, `total_price`

**❌ Not Allowed:**
- Start with number: `2name` ❌
- Use special characters: `user-name` ❌
- Use Python keywords: `if`, `for`, `while` ❌
- Use spaces: `user name` ❌

### Best Practices:
```python
# ✅ Good naming
user_name = "john_doe"
total_price = 29.99
is_active = True
student_count = 150

# ❌ Bad naming
n = "john_doe"          # Too short
totalPrice = 29.99      # Inconsistent style
flag = True             # Not descriptive
cnt = 150               # Abbreviation unclear
```

### Variable Scope:
```python
# Global variable
global_var = "I'm global"

def my_function():
    # Local variable
    local_var = "I'm local"
    print(global_var)  # Can access global
    print(local_var)   # Can access local

# Can't access local_var here
```

### Type Checking:
```python
# Check variable type
name = "Alice"
age = 25
height = 5.8

print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>
print(type(height))  # <class 'float'>

# Type conversion
age_str = str(age)      # Convert to string
height_int = int(height)  # Convert to integer
```

### Memory Management:
```python
# Python automatically manages memory
x = 1000
y = x  # y references the same object
x = 2000  # x now references a new object

# Check object identity
print(id(x))  # Memory address
print(id(y))  # Different memory address
```

### Constants (Convention):
```python
# Use UPPERCASE for constants
PI = 3.14159
MAX_CONNECTIONS = 100
DEFAULT_TIMEOUT = 30

# These can still be changed, but shouldn't be
PI = 3.14  # Possible but not recommended
```

---

# Slide 5: Python Data Types

## 🔢 Understanding Data Types in Python

### What are Data Types?
Data types define the **kind of data** a variable can hold. Python has several built-in data types, each with specific characteristics and operations.

### Basic Data Types

| Type | Description | Examples | Memory Usage |
|------|-------------|----------|--------------|
| `int` | Whole numbers (positive/negative) | `42, -17, 0, 1000000` | Variable |
| `float` | Decimal numbers | `3.14, -2.5, 0.0, 1.23e-4` | 8 bytes |
| `str` | Text strings | `"Hello", 'Python', """Multi-line"""` | Variable |
| `bool` | True/False values | `True, False` | 1 byte |
| `None` | Represents absence of value | `None` | 16 bytes |

### Integer (int)
```python
# Positive integers
age = 25
population = 8000000000
year = 2024

# Negative integers
temperature = -5
debt = -1000

# Different number systems
binary = 0b1010      # Binary: 10
octal = 0o12         # Octal: 10
hexadecimal = 0xA     # Hexadecimal: 10

# Large numbers (Python handles automatically)
large_number = 123456789012345678901234567890
```

### Float (float)
```python
# Decimal numbers
pi = 3.14159
temperature = 98.6
price = 19.99

# Scientific notation
avogadro = 6.022e23      # 6.022 × 10^23
small_number = 1.23e-4   # 0.000123

# Special float values
infinity = float('inf')
negative_infinity = float('-inf')
not_a_number = float('nan')

# Precision issues (be careful!)
result = 0.1 + 0.2  # Might not be exactly 0.3
```

### String (str)
```python
# Single quotes
name = 'Alice'

# Double quotes
message = "Hello, World!"

# Triple quotes for multi-line
poem = """
Roses are red,
Violets are blue,
Python is awesome,
And so are you!
"""

# String operations
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name  # Concatenation
greeting = f"Hello, {first_name}!"        # f-string (Python 3.6+)

# String methods
text = "  Hello, World!  "
print(text.strip())      # Remove whitespace
print(text.upper())      # Convert to uppercase
print(text.lower())      # Convert to lowercase
print(text.replace("World", "Python"))  # Replace text
```

### Boolean (bool)
```python
# Boolean values
is_active = True
is_finished = False

# Boolean operations
and_result = True and False    # False
or_result = True or False      # True
not_result = not True          # False

# Comparison operators return booleans
age = 25
is_adult = age >= 18          # True
is_teenager = 13 <= age <= 19 # False

# Truthy and Falsy values
truthy_values = [1, "hello", [1, 2, 3], True]
falsy_values = [0, "", [], False, None]
```

### None Type
```python
# None represents absence of value
empty_value = None

# Common use cases
def find_user(name):
    # Return user if found, None if not found
    if name in users:
        return users[name]
    return None

# Check for None
if empty_value is None:
    print("Value is None")
```

### Type Checking and Conversion
```python
# Check data types
x = 42
y = 3.14
z = "Hello"

print(type(x))    # <class 'int'>
print(type(y))    # <class 'float'>
print(type(z))    # <class 'str'>

# Type conversion
age_str = "25"
age_int = int(age_str)        # Convert string to int
height_str = "5.8"
height_float = float(height_str)  # Convert string to float

# Safe conversion
def safe_int(value):
    try:
        return int(value)
    except ValueError:
        return None

result = safe_int("abc")  # Returns None instead of error
```

### Complex Data Types
```python
# Lists (mutable)
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# Tuples (immutable)
coordinates = (10, 20)
person = ("Alice", 25, "Engineer")

# Dictionaries
user = {"name": "Bob", "age": 30, "city": "NYC"}

# Sets
unique_numbers = {1, 2, 3, 3, 4}  # {1, 2, 3, 4}
```

### Memory and Performance
```python
import sys

# Check memory usage
x = 42
print(sys.getsizeof(x))  # Memory usage in bytes

# Large numbers
large_int = 10**1000
print(sys.getsizeof(large_int))  # Much larger memory usage

# String memory
short_string = "Hello"
long_string = "Hello" * 1000
print(sys.getsizeof(short_string))
print(sys.getsizeof(long_string))
```

### Best Practices
```python
# Use appropriate types
# ✅ Good
age = 25
price = 19.99
name = "Alice"
is_active = True

# ❌ Avoid
age = "25"  # String instead of int
price = 20  # Int instead of float
name = None  # None instead of string
is_active = 1  # Int instead of bool

# Use type hints (Python 3.5+)
def calculate_total(price: float, quantity: int) -> float:
    return price * quantity
```

---

# Slide 6: Type Casting and Conversion

## 🔄 Converting Between Types

### String to Number
```python
int("10")     # 10
float("3.5")  # 3.5
```

### Number to String
```python
str(5)       # "5"
str(3.14)    # "3.14"
```

### Conversion Rules:
- Strings must contain valid numbers for conversion
- Floats can be converted to integers (truncates)
- Any value can be converted to string

---

# Slide 7: Getting User Input

## 📝 Interactive Programs

### Basic Input
```python
name = input("Enter your name: ")
print(f"Hello, {name}!")
```

### Important Tips:
- **Always Returns String** - input() always returns a string, even for numbers
- **Type Conversion** - Use int() or float() to convert numeric input

### Example with Conversion:
```python
age = int(input("Enter your age: "))
height = float(input("Enter your height: "))
```

---

# Slide 8: Working with Strings

## 📝 Text Manipulation

### Indexing & Slicing
```python
text = "Hello, Python!"
print(text[0])      # H
print(text[1:5])    # ello
print(text[-1])     # !
```

### String Properties:
- **Zero-indexed** - First character is at index 0
- **Immutable** - Cannot be changed after creation
- **Support slicing** - Extract portions of strings

---

# Slide 9: String Methods

## 🔧 Built-in String Functions

### Case Conversion
```python
"Hello".lower()  # "hello"
"hello".upper()  # "HELLO"
```

### Text Manipulation
```python
"Hello".replace("l", "x")  # "Hexxo"
"a,b,c".split(",")         # ["a", "b", "c"]
```

### Other Useful Methods:
- `.strip()` - Remove whitespace
- `.join()` - Combine strings
- `.find()` - Find substring position

---

# Slide 10: Arithmetic Operators

## 🔢 Mathematical Operations

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `10 - 4` | `6` |
| `*` | Multiplication | `6 * 7` | `42` |
| `/` | Division | `15 / 3` | `5.0` |
| `//` | Floor Division | `15 // 3` | `5` |
| `%` | Modulo | `17 % 5` | `2` |
| `**` | Exponentiation | `2 ** 3` | `8` |

### Operator Precedence:
1. Parentheses `()`
2. Exponentiation `**`
3. Multiplication/Division `* / // %`
4. Addition/Subtraction `+ -`

---

# Slide 11: Comparison and Logical Operators

## ⚖️ Making Decisions

### Comparison Operators
```python
x == y    # Equal
x != y    # Not equal
x > y     # Greater than
x < y     # Less than
x >= y    # Greater or equal
x <= y    # Less or equal
```

### Logical Operators
```python
x and y   # Both true
x or y    # Either true
not x     # Opposite
```

### Example:
```python
age = 25
income = 50000
is_eligible = age >= 18 and income > 30000
```

---

# Slide 12: If-Else Statements

## 🎯 Conditional Logic

### Basic If-Else
```python
age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")
```

### Key Points:
- **Indentation Matters** - Python uses indentation to define code blocks
- **Colon Required** - Always use : after if, elif, and else
- **Boolean Conditions** - Use comparison and logical operators

---

# Slide 13: Nested If Statements

## 🔗 Complex Conditions

### Nested Conditions
```python
age = 25
income = 50000

if age >= 18:
    if income > 30000:
        print("Eligible for loan")
    else:
        print("Income too low")
else:
    print("Too young")
```

### Best Practices:
- Keep nesting shallow (max 2-3 levels)
- Use logical operators when possible
- Consider using elif for multiple conditions

---

# Slide 14: elif Statements

## 🔀 Multiple Conditions

### Using elif
```python
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
```

### Benefits of elif:
- **More efficient** than nested if
- **Cleaner and more readable**
- **Only one condition is evaluated**

---

# Slide 15: For Loops with range()

## 🔄 Iteration

### Basic For Loop
```python
for i in range(5):
    print(i)
# Output: 0, 1, 2, 3, 4
```

### Range with Start/Stop
```python
for i in range(1, 6):
    print(i)
# Output: 1, 2, 3, 4, 5
```

### Range with Step
```python
for i in range(0, 10, 2):
    print(i)
# Output: 0, 2, 4, 6, 8
```

---

# Slide 16: While Loops

## 🔄 Conditional Iteration

### Basic While Loop
```python
i = 0
while i < 5:
    print(i)
    i += 1
```

### User Input Loop
```python
password = ""
while password != "secret":
    password = input("Enter password: ")
```

### ⚠️ Warning: Infinite Loops
Always ensure the condition will eventually become False!

---

# Slide 17: Break and Continue

## ⏹️ Loop Control

### Break Statement
```python
for i in range(10):
    if i == 5:
        break
    print(i)
# Output: 0, 1, 2, 3, 4
```

### Continue Statement
```python
for i in range(5):
    if i == 2:
        continue
    print(i)
# Output: 0, 1, 3, 4
```

### When to Use:
- **break**: Exit loop early
- **continue**: Skip current iteration

---

# Slide 18: Lists Introduction

## 📋 Collections

### Creating Lists
```python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
```

### Basic Operations
```python
fruits[0]        # "apple" (indexing)
fruits[1:3]      # ["banana", "cherry"] (slicing)
fruits[0] = "orange"  # Update element
```

### List Properties:
- **Ordered collection**
- **Mutable** (can be changed)
- **Can contain different types**
- **Zero-indexed**

---

# Slide 19: List Methods

## 🔧 Built-in List Functions

### Adding Elements
```python
fruits = ["apple", "banana"]
fruits.append("cherry")     # Add to end
fruits.insert(1, "orange")  # Insert at index
```

### Removing Elements
```python
fruits.remove("banana")  # Remove by value
fruits.pop()              # Remove last
fruits.pop(0)             # Remove by index
```

### Other Methods
```python
fruits.sort()           # Sort in place
fruits.reverse()        # Reverse order
len(fruits)             # Get length
```

---

# Slide 20: List Comprehensions

## ⚡ Concise List Creation

### Basic Comprehension
```python
squares = [x**2 for x in range(5)]
# [0, 1, 4, 9, 16]
```

### With Condition
```python
evens = [x for x in range(10) if x % 2 == 0]
# [0, 2, 4, 6, 8]
```

### Traditional vs Comprehension
```python
# Traditional way
squares = []
for x in range(5):
    squares.append(x**2)

# List comprehension
squares = [x**2 for x in range(5)]
```

---

# Slide 21: Defining Functions

## 🔧 Code Reusability

### Basic Function
```python
def greet(name):
    return "Hello, " + name

# Using the function
message = greet("Alice")
print(message)  # "Hello, Alice"
```

### Function Components:
- `def` - Function definition keyword
- `greet` - Function name
- `name` - Parameter
- `return` - Return value

---

# Slide 22: Function Examples

## 📝 Practical Functions

### Multiple Parameters
```python
def add(a, b):
    return a + b

result = add(5, 3)  # 8
```

### Default Parameters
```python
def greet(name="World"):
    return f"Hello, {name}!"

greet()      # "Hello, World!"
greet("Bob") # "Hello, Bob!"
```

### Multiple Returns
```python
def get_name_age():
    return "Alice", 25

name, age = get_name_age()
```

---

# Slide 23: Built-in Functions

## 🔧 Python's Toolbox

### Data Functions
```python
len([1, 2, 3])     # 3
sum([1, 2, 3])     # 6
max([1, 2, 3])     # 3
min([1, 2, 3])     # 1
```

### Type Functions
```python
type(42)          # int
str(42)           # "42"
int("42")         # 42
float("3.14")     # 3.14
```

### Utility Functions
```python
sorted([3, 1, 2])  # [1, 2, 3]
range(5)           # [0, 1, 2, 3, 4]
print("Hello")     # Output: Hello
```

---

# Slide 24: Errors and Debugging

## 🐛 Handling Problems

### Common Error Types
```python
# SyntaxError
if x > 5
    print("Error")

# NameError
print(undefined_variable)

# TypeError
"5" + 3

# ValueError
int("abc")
```

### Debugging Tips:
- Use `print()` to trace execution
- Read error messages carefully
- Check variable names and types
- Use a debugger or IDE

---

# Slide 25: Practice & Q&A

## 🎯 Next Steps

### Practice Suggestions:

**💻 Practice Problems**
- Try basic HackerRank problems
- Start with simple algorithms

**📚 Read Documentation**
- Explore Python's official docs
- Learn about standard library

**👥 Join Communities**
- Stack Overflow
- Reddit r/learnpython

**🔨 Build Projects**
- Create simple programs to practice
- Start with calculator or game

---

---

# Slide 26: Advanced Python Concepts

## 🚀 Beyond the Basics

### Object-Oriented Programming
```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"Hi, I'm {self.name} and I'm {self.age} years old"

student = Student("Alice", 20)
print(student.introduce())
```

### File Handling
```python
# Reading files
with open('data.txt', 'r') as file:
    content = file.read()

# Writing files
with open('output.txt', 'w') as file:
    file.write("Hello, World!")
```

---

# Slide 27: Exception Handling

## 🛡️ Error Management

### Try-Except Blocks
```python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("Please enter a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
```

### Best Practices:
- **Specific exceptions** over general ones
- **Clean up resources** with finally blocks
- **Log errors** for debugging
- **User-friendly messages**

---

# Slide 28: Modules and Packages

## 📦 Code Organization

### Creating Modules
```python
# math_utils.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

# main.py
import math_utils
result = math_utils.add(5, 3)
```

### Popular Built-in Modules
```python
import math          # Mathematical functions
import random        # Random number generation
import datetime      # Date and time handling
import os           # Operating system interface
import json         # JSON data handling
```

---

# Slide 29: List Comprehensions Advanced

## ⚡ Advanced List Operations

### Nested Comprehensions
```python
# Create a 3x3 matrix
matrix = [[i+j for j in range(3)] for i in range(0, 9, 3)]

# Filter and transform
squares_of_evens = [x**2 for x in range(10) if x % 2 == 0]
```

### Dictionary Comprehensions
```python
# Create a dictionary of squares
squares_dict = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Filter dictionary
filtered_dict = {k: v for k, v in squares_dict.items() if v > 5}
```

---

# Slide 30: Lambda Functions

## 🚀 Anonymous Functions

### Basic Lambda
```python
# Regular function
def square(x):
    return x ** 2

# Lambda function
square = lambda x: x ** 2

print(square(5))  # 25
```

### Lambda with Built-in Functions
```python
numbers = [1, 2, 3, 4, 5]

# Map with lambda
squares = list(map(lambda x: x**2, numbers))

# Filter with lambda
evens = list(filter(lambda x: x % 2 == 0, numbers))

# Sort with lambda
sorted_by_abs = sorted([-3, 1, -2, 4], key=lambda x: abs(x))
```

---

# Slide 31: Decorators

## 🎨 Function Enhancement

### Basic Decorator
```python
def timer(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    return "Done!"
```

### Decorator with Parameters
```python
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello, {name}!")
```

---

# Slide 32: Generators

## 🔄 Memory Efficient Iteration

### Basic Generator
```python
def number_generator(n):
    for i in range(n):
        yield i

# Using the generator
for num in number_generator(5):
    print(num)  # 0, 1, 2, 3, 4
```

### Generator Expression
```python
# Instead of list comprehension
squares_list = [x**2 for x in range(1000000)]  # Uses memory

# Use generator expression
squares_gen = (x**2 for x in range(1000000))   # Memory efficient
```

### Infinite Generator
```python
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Get first 10 Fibonacci numbers
fib = fibonacci()
for _ in range(10):
    print(next(fib))
```

---

# Slide 33: Context Managers

## 🔧 Resource Management

### Using with Statement
```python
# File handling (automatic cleanup)
with open('file.txt', 'r') as file:
    content = file.read()
# File automatically closed

# Database connections
with database.connect() as conn:
    conn.execute("SELECT * FROM users")
# Connection automatically closed
```

### Custom Context Manager
```python
class Timer:
    def __init__(self, name):
        self.name = name
    
    def __enter__(self):
        import time
        self.start = time.time()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        end = time.time()
        print(f"{self.name} took {end - self.start:.4f} seconds")

# Usage
with Timer("My Function"):
    # Do something
    pass
```

---

# Slide 34: Regular Expressions

## 🔍 Pattern Matching

### Basic Patterns
```python
import re

# Find all digits
text = "Phone: 123-456-7890"
digits = re.findall(r'\d+', text)  # ['123', '456', '7890']

# Match email pattern
email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
email = "user@example.com"
if re.match(email_pattern, email):
    print("Valid email")
```

### Common Patterns
```python
# Phone number
phone_pattern = r'\d{3}-\d{3}-\d{4}'

# Date format
date_pattern = r'\d{2}/\d{2}/\d{4}'

# Word boundaries
word_pattern = r'\b\w+\b'
```

---

# Slide 35: Working with JSON

## 📄 Data Serialization

### JSON Operations
```python
import json

# Python to JSON
data = {
    "name": "Alice",
    "age": 25,
    "city": "New York",
    "skills": ["Python", "JavaScript"]
}

json_string = json.dumps(data, indent=2)
print(json_string)

# JSON to Python
parsed_data = json.loads(json_string)
print(parsed_data["name"])  # Alice
```

### File Operations
```python
# Write JSON to file
with open('data.json', 'w') as file:
    json.dump(data, file, indent=2)

# Read JSON from file
with open('data.json', 'r') as file:
    loaded_data = json.load(file)
```

---

# Slide 36: Virtual Environments

## 🏗️ Project Isolation

### Creating Virtual Environment
```bash
# Create virtual environment
python -m venv myproject

# Activate on macOS/Linux
source myproject/bin/activate

# Activate on Windows
myproject\Scripts\activate

# Install packages
pip install requests pandas numpy

# Deactivate
deactivate
```

### Requirements File
```bash
# Generate requirements.txt
pip freeze > requirements.txt

# Install from requirements.txt
pip install -r requirements.txt
```

---

# Slide 37: Testing with unittest

## 🧪 Code Quality

### Basic Test
```python
import unittest

def add(a, b):
    return a + b

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(0, 0), 0)
    
    def test_add_floats(self):
        self.assertAlmostEqual(add(1.1, 2.2), 3.3, places=1)

if __name__ == '__main__':
    unittest.main()
```

### Test Methods
```python
# Common assertions
self.assertEqual(a, b)      # a == b
self.assertNotEqual(a, b)   # a != b
self.assertTrue(x)          # bool(x) is True
self.assertFalse(x)         # bool(x) is False
self.assertIn(a, b)         # a in b
self.assertRaises(Exception) # Function raises exception
```

---

# Slide 38: Working with APIs

## 🌐 Web Integration

### Basic HTTP Requests
```python
import requests

# GET request
response = requests.get('https://api.github.com/users/octocat')
data = response.json()
print(data['name'])

# POST request
payload = {'name': 'John', 'age': 30}
response = requests.post('https://httpbin.org/post', json=payload)
```

### Error Handling
```python
try:
    response = requests.get('https://api.example.com/data')
    response.raise_for_status()  # Raises exception for 4XX/5XX
    data = response.json()
except requests.exceptions.RequestException as e:
    print(f"Request failed: {e}")
```

---

# Slide 39: Data Analysis with Pandas

## 📊 Data Manipulation

### Basic Operations
```python
import pandas as pd

# Create DataFrame
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['NYC', 'LA', 'Chicago']
})

# Basic operations
print(df.head())
print(df.describe())
print(df['Age'].mean())
```

### Data Filtering
```python
# Filter by condition
young_people = df[df['Age'] < 30]

# Group by
city_stats = df.groupby('City')['Age'].mean()

# Sort values
sorted_df = df.sort_values('Age', ascending=False)
```

---

# Slide 40: Final Project Ideas

## 🎯 Apply Your Knowledge

### Beginner Projects
- **Calculator** - Basic arithmetic operations
- **To-Do List** - CRUD operations with file storage
- **Password Generator** - Random string generation
- **Number Guessing Game** - User input and loops

### Intermediate Projects
- **Web Scraper** - Extract data from websites
- **API Integration** - Connect to external services
- **Data Visualization** - Charts and graphs
- **Simple Web App** - Flask or Django

### Advanced Projects
- **Machine Learning Model** - Data analysis and prediction
- **Automation Scripts** - File processing and scheduling
- **Full-Stack Application** - Complete web application
- **Mobile App** - Using frameworks like Kivy

---

## 🎉 Congratulations!

You've completed the **Complete Python Programming Course**!

### 🚀 What You've Learned:
- **Core Python Concepts** - Variables, functions, loops
- **Advanced Features** - OOP, decorators, generators
- **Real-World Applications** - APIs, testing, data analysis
- **Best Practices** - Error handling, documentation, testing

### 🎯 Next Steps:
1. **Build Projects** - Apply your knowledge
2. **Join Communities** - Stack Overflow, Reddit, Discord
3. **Contribute to Open Source** - GitHub projects
4. **Never Stop Learning** - Python ecosystem is vast!

**Remember**: The best way to learn programming is by doing. Start building your own projects and never stop exploring!

---

*Created with ❤️ for Novakinetix Academy* 