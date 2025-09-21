---
title: Module 1 - Introduction to Linux
permalink:  /blogs/linux-mastery/mod1_linux_intro
---

# Module 1: Introduction to Linux
Welcome to the first module! Since we're starting from the very basics, So we'll learn everything step by step, assuming you have no prior knowledge of operating systems beyond everyday computer use (like clicking icons on Windows or macOS). We'll break this down into the three main subtopics from the syllabus: Overview and History, Linux Distributions, and Installation and Setup. I'll use simple language, analogies, and examples to make it clear. Think of this as building a foundation—like learning the alphabet before writing sentences.

By the end of this module, you'll understand what Linux is, why it exists, how to choose a version that suits you, and how to get it running on your computer without risking your current setup. Let's dive in!

### 1. Overview and History: What is Linux?

**`What is an Operating System (OS)?`**

Before we talk about Linux specifically, let's start with the absolute basics: 
What even is an operating system? 

Think of your computer like a car.

- The **hardware** (CPU, RAM, hard drive, keyboard, screen, etc.) is like the car’s **engine, wheels, and seats**—all the physical parts.
- But just having these parts doesn’t mean you can drive the car. You need a system that makes everything work together—starting the engine, steering, showing speed, playing music.

That system is the **Operating System (OS)**.

In short, the OS is the **brain of your computer**. It:

- Controls and manages hardware (CPU, memory, storage, etc.)
- Runs your applications (like a web browser, video player, or game)
- Handles files and folders
- Connects your computer to the internet and other devices
- Provides a **user interface (UI)** so you can interact with the machine easily

Without an OS, your computer’s hardware is just useless parts with no way to work together.

Common OS examples you might know:

- Microsoft Windows (e.g., Windows 10 or 11): User-friendly with a graphical interface, but proprietary (owned by Microsoft, not free to modify).
- Apple's macOS: Sleek and integrated with Apple hardware, also proprietary.
- Android (on phones): Based on Linux, actually—& more !

Linux is another OS, but it's unique in many ways.

---

**`What is Linux Exactly?`**

Linux is a free, open-source operating system kernel,
Think of a computer like a car. The **kernel** is the car’s engine control unit — the part that talks directly to the hardware (CPU, memory, disk). **Linux** is that kernel. But when people say “Linux” they usually mean a full operating system built around that kernel — the kernel **plus** all the tools, apps, and interfaces you need to actually to use a computer. Those complete systems are called **distributions** (or distros), like Ubuntu, Fedora, or Debian.

![](https://media.geeksforgeeks.org/wp-content/uploads/20250124124411692602/kernel.webp)

- **Free and Open-Source**: Unlike Windows or macOS, Linux is developed by a global community of volunteers and companies. The source code (the "recipe" for how it works) is publicly available. Anyone can view, modify, or distribute it under licenses like the GNU General Public License (GPL). This means it's gratis (no cost) and libre (freedom to customize).
- **Multi-User and Multi-Tasking**: It supports multiple users logging in at once (great for servers) and running many programs simultaneously without crashing.
- **Stable and Secure**: Linux is known for rarely needing reboots (servers can run for years) and strong security features, like built-in firewalls and user permissions.
- **Customizable**: You can tweak everything—from the desktop look to how the system boots (means You can change nearly anything — the look of the desktop, how the system starts, which pieces are installed and almost everything).

**Where you see Linux**

- Phones: Android is built on the Linux kernel.
- Servers & websites: many web servers run Linux.
- Supercomputers and data centers: most high-performance systems use Linux.
- Embedded devices: routers, smart TVs, IoT gadgets, and more.
- Even some space and research systems use Linux.

---

**`History: From UNIX Origins to Modern Linux`**

To understand Linux, we need to go back in time. This history explains why Linux is so powerful and why it's open-source.

- **1960s-1970s: UNIX is born**
    
    In the late 1960s, at Bell Labs (part of AT&T), engineers like Ken Thompson and Dennis Ritchie created UNIX. It was designed for multi-user, multi-tasking computing on mainframes (big computers used by businesses and universities). UNIX was written in C (a programming language Ritchie invented), making it portable across different hardware.
    
    Analogy: UNIX was like the first modern car—reliable, efficient, but expensive and owned by a company (AT&T). Universities and researchers loved it, but AT&T controlled the code.
    
- **1980s: The Open-Source Philosophy Emerges**
    
    Richard Stallman, a programmer at MIT, was frustrated with proprietary software (where you can't see or change the code). In 1983, he started the GNU Project (GNU's Not UNIX) to create a free alternative to UNIX. 
    
    GNU developed free tools like compilers (GCC), editors (Emacs), and shells (bash) , etc—everything except the kernel.
    
    Stallman also started the **Free Software Movement** and wrote the **GNU General Public License (GPL)**. The GPL says: if you share modified software, you must also share the source code — that keeps the software “free” in the sense of freedom.
    
- **1991: Linus Torvalds Enters the Scene**
    
    A Finnish student named Linus Torvalds was using Minix (a UNIX-like teaching OS) but wanted something better for his PC. In 1991, he wrote a simple kernel and released it online, inviting others to improve it. He combined it with GNU tools, creating "GNU/Linux" (though most just say "Linux").
    
    Key Milestone: The first version (0.01) was tiny—just enough to boot and run a shell. By 1994, version 1.0 was stable.
    
- **1990s-2000s: Growth and Key Milestones**
    - People packaged the kernel + GNU tools + other software into complete systems called **distributions** (or **distros**): examples include **Debian**, **Red Hat**, **Fedora**, **Ubuntu**.
    - 1993: Debian distribution (distro) released—community-driven and stable.
    - 1996: KDE desktop environment for a graphical UI.
    - 1998: Netscape open-sourced its browser (leading to Firefox), boosting open-source. Companies like IBM invested in Linux.
    - 2004: Ubuntu launched, making Linux user-friendly for desktops.
    - 2008: Android (Linux-based) revolutionized mobile OS.
    - 2010s: Linux dominates cloud computing (e.g., AWS, Google Cloud) and servers. Systemd (a init system) modernizes boot processes.
    - **2020s — Current status:** As of **August 28, 2025**, the latest stable Linux kernel release is **6.16.4**. The 6.x series continues to bring better hardware support (especially for newer ARM SoCs and CPUs), ongoing security hardening against classes of attacks like Spectre/Meltdown, and performance/efficiency improvements aimed at cloud, AI/ML, and embedded workloads.
        
        You can always check the official, up-to-date kernel releases on **The Linux Kernel Archives**: [https://www.kernel.org/](https://www.kernel.org/?utm_source=chatgpt.com) (the site shows stable, mainline, and longterm releases).
        

**Some related important terms:**

- **Kernel**
    
    The kernel is the core software that talks directly to hardware (CPU, memory, disks). It decides which program runs on the CPU and how memory is split up. Think of it as the engine control unit in a car.
    
    The kernel of an operating system is something you will never see. It basically enables any other programs to execute. It handles events generated by hardware (called ***interrupts***) and software (called ***system calls***), and manages access to resources.
    
    A kernel loads first into memory when an operating system is loaded and remains in memory until the operating system is shut down again.
    
- **GNU**
    
    GNU is a set of free software tools (compilers, editors, shells, core utilities). The GNU Project wanted to build a complete free operating system. GNU provided almost everything except a ready kernel — which is why GNU tools + Linux kernel became a complete system.
    
- **Distribution (distro)**
    
    A distro is a full OS you can install: Linux kernel + GNU tools + desktop, installer, package manager, apps. Examples: Ubuntu, Debian, Fedora, Arch. Each distro chooses a mix of software and goals (stability, bleeding-edge, ease-of-use).
    
- To protect hardware from misbehaving software, the Linux operating system divides virtual memory into two distinct areas:
    - **Userland / user space**
        
        Everything outside the kernel (applications, shells, utilities). GNU tools are part of userland.
        
        This is a non-privileged memory area where all user applications run. Applications in user space cannot access hardware directly but must interact with the kernel through a **system call** interface. This isolation prevents a faulty application from crashing the entire system. 
        
    - **Kernel space**
        
        This is a restricted, privileged area of memory where the kernel, device drivers, and other extensions run. Code in kernel space has **unrestricted** access to the computer's hardware (means It has full, unrestricted access to the hardware).
        
        A crash in this space can bring down the entire system.
        
    - **Short one-line summary:** **User space** is where regular programs run with limited rights; **kernel space** is where the OS core (the kernel) runs with full privileges and direct access to hardware.
- **Shell**
    
    A program that reads your commands and runs programs (bash is a common shell). It's like the car’s dashboard controls — you type or click and the shell runs what you ask.
    
- **Desktop environment**
    
    The graphical interface (windows, panels, icons). Examples: GNOME, KDE, XFCE.
    
- **Init / systemd**
    
    The “init” system starts up background services when the computer boots. **systemd** is a modern init used by many distros to manage booting and services.
    
- **GPL (GNU General Public License)**
    
    A license that lets you run, study, modify, and share software — but if you distribute modified versions, you must share the source and keep the same freedoms for others.
    
- **Open-source vs proprietary**
    - **Open-source/free software**: source code available, people can change and share it.
    - **Proprietary**: code is closed, controlled by a company, and users can’t see or modify it.

**Why do people combine the words “GNU/Linux”?**

- Because the running systems you actually use typically include GNU userland tools plus the Linux kernel.
- Some people (like Richard Stallman) emphasize **GNU/Linux** to credit the GNU project’s role; others say **Linux** as a shorter name. Both refer to the same family of operating systems.

**Final short summary:**

- UNIX introduced the ideas. GNU gave us the free tools and license. Linus’s **Linux kernel** filled the missing piece. Put them together, and you get powerful, flexible systems (Linux distributions) used all over the world.

___

### 2. Linux Distributions: Choosing Your Flavor

Linux isn't a single OS; it's a kernel with many "distributions" (distros)—pre-packaged versions with different tools, UIs, and focuses. Think of the Linux kernel as chocolate ice cream base, and distros as flavors with toppings (e.g., sprinkles for beginners, nuts for experts).

**Why So Many Distros?**

Because it's open-source, anyone can create one. There are hundreds, but a few dozen popular ones. 

Distros differ in:

- **Package Management**: How software is installed (e.g., deb for Debian-based, rpm for Red Hat-based).
- **Release Cycle**: Rolling releases (constant updates, like Arch) vs. fixed (stable versions every 6 months, like Ubuntu).
- **Target Audience**: Desktop (user-friendly), server (minimal, efficient), specialized (e.g., for hacking like Kali).

**Popular Distros as of 2025**

Based on current trends (Distrowatch rankings, user surveys), here are top ones. I'll categorize for beginners.

- **Beginner-Friendly Desktop Distros**:
    - **Ubuntu**: Most popular for newbies. Based on Debian, with a clean GNOME DE. Easy to install, huge community support, and Long-Term Support (LTS) versions (e.g., Ubuntu 24.04 LTS, supported until 2029). Great for daily use, gaming (via Steam Proton), and learning.
    - **Linux Mint**: Based on Ubuntu, with Cinnamon DE (feels like Windows). Even more user-friendly, pre-installed codecs for media. Ideal if you hate change.
    - **Pop!_OS**: From System76 (hardware company), based on Ubuntu. Excellent for developers/hardware tinkerers, with NVIDIA support out-of-the-box.
- **Intermediate/Advanced Distros**:
    - **Fedora**: Sponsored by Red Hat. Cutting-edge features, uses GNOME. Good for learning enterprise skills (leads to Red Hat certifications). Workstation edition for desktops.
    - **Debian**: Stable and free-software focused. Basis for Ubuntu. Use if you want rock-solid reliability but don't mind older software.
    - **Arch Linux**: Rolling release, minimalist. You build it yourself via wiki—great for learning deeply, but steep curve. Manjaro is a user-friendly Arch variant.
- **Server/Enterprise Distros**:
    - **CentOS Stream**: Successor to classic CentOS (discontinued in 2021). Tied to Red Hat Enterprise Linux (RHEL). Free version of enterprise-grade OS.
    - **Rocky Linux or AlmaLinux**: Community forks of RHEL after CentOS changes. Stable for servers, with long support.
    - **Ubuntu Server**: Lightweight, no GUI by default. Popular for cloud/web hosting.
- **Specialized Distros**:
    - **Raspberry Pi OS**: For single-board computers like Raspberry Pi.
    - **Kali Linux**: For cybersecurity/penetration testing.
    - **Fedora Silverblue or Ubuntu Core**: Immutable (hard to break) for reliability.

**How to Choose One**

- Assess needs: Desktop for home? Server for web?
- Try live modes (run from USB without installing).
- Read reviews on [Distrowatch.com](http://distrowatch.com/) or Reddit (r/linux4noobs).
- For you: I recommend Ubuntu 24.04 LTS—stable, vast tutorials.

**Server vs. Desktop Editions**

- **Desktop**: Includes GUI, drivers for graphics/sound, and apps like browsers. For personal use.
- **Server**: Minimal install—no GUI, focused on command-line for efficiency. Runs in background (e.g., hosting websites). You can add GUI later if needed.
Choosing: For beginners, start with a desktop distro like Ubuntu. Consider your hardware (e.g., lightweight distro for old PCs) and goals (learning CLI? Go minimal).

___

### 3. Installation and Setup: Getting Linux Running

- To install the Linux OS (Ubantu) on your machine first the Virtual Box from here → https://www.virtualbox.org/
- Then install the Ubantu iso image from here → https://ubuntu.com/download/desktop
- And then follow the Setup explanation video…

### 4. Linux Kernel: Detailed Guide reference

Learn more about kernel from here:

https://www.geeksforgeeks.org/operating-systems/kernel-in-operating-system/

---

<div style="display: flex; justify-content: space-around; margin-top: 30px;">

  <a href="./index.md" style="text-decoration: none; font-weight: bold;">⬅ Previous</a>

  <a href="./mod2_linux_cli.md" style="text-decoration: none; font-weight: bold;">Next ➡</a>

</div>