# Sharp8

This is a simple Chip8 emulator written in C#. It replicates the functionality of the original Chip8, a virtual machine initially designed for 8-bit microcomputers in the 1970s. The emulator interprets and executes Chip8 opcodes, allowing you to load and play classic Chip8 games.

## Features
- **Core Chip8 Instruction Set**: Supports all major opcodes required to run most Chip8 ROMs.
- **Display**: 1280x640 display, emulating the original 64x32 monochrome screen.
- **Input Handling**: Maps the original keyboard (0-F). Includes custom mappings for games like Pong
- **Timers**: Delay and sound timers are emulated accordingly.
- **Sound**: Basic sound beep using a simple tone - Supported on both Windows and Linux.

## Usage
1. **Clone the repository**.
2. **Install Dependencies**: Make sure you have .NET 8 Runtime installed ([Guide](https://learn.microsoft.com/en-us/dotnet/core/install/))
3. **Run the Emulator**:

    - **Default:**
    ``
    dotnet run
    ``

    - **Pong Keymap Set:**
    ``
    dotnet run pong
    ``
4. **Load a Chip8 ROM**: Choose a game from the ROMs folder or download a game yourself. After that - drag and drop the file in the window and you're good to go!

## Controls
- **1-9, A-F**: Maps to Chip8 keys (0x1 to 0xF).
- **Upcoming: Debugging Keyboard Support**: Keymaps for debugging graphics and memory
---
