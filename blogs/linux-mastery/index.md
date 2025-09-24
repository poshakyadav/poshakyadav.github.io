---
title: Linux Operation System
excerpt: "Overview and table of contents for my Linux notes."
---

# Linux Operation System

### Linux Operating System Syllabus: From Basics to Advanced

This syllabus is designed to take you from a complete beginner to an advanced Linux user/administrator. It's structured into modules, each building on the previous one. Each module includes main topics and subtopics for clarity. We'll cover concepts, hands-on commands, best practices, and real-world applications. I recommend progressing sequentially, as later topics assume knowledge from earlier ones.

[Module 1: Introduction to Linux](./mod1_linux_intro)

- Overview and History: What is Linux? UNIX origins, open-source philosophy, key milestones,  **important terms**
- Linux Distributions: Popular distros (e.g., Ubuntu, Fedora, CentOS, Debian, Arch), choosing one for beginners, server vs. desktop editions.
- Installation and Setup
- Linux kernel: Guide reference

[Module 2: Linux Fundamentals and Command Line Interface (CLI)](./modules/mod2_linux_cli.md)

- The Shell: Understanding bash (default shell), terminal emulators, basic commands (pwd, ls, cd, echo).
- File System Navigation: Directory structure (/home, /etc, /var, etc.), absolute vs. relative paths, hidden files.
- File and Directory Operations: Creating/deleting/moving files and directories (touch, mkdir, rm, mv, cp), viewing content (cat, less, more).
- Text Editing: Using nano/vi/vim for editing files, shortcuts and modes.

[Module 3: Permissions, Users, and Basic System Management](./modules/mod3_permissions_sys_mgt.md)

- File Permissions and Ownership: Understanding chmod, chown, chgrp; read/write/execute modes; umask.
- User and Group Management: Adding/removing users (useradd, passwd), sudo privileges, switching users (su, sudo).
- Package Management: Installing/removing software using apt (Debian-based) or yum/dnf (RPM-based), repositories, updating the system.
- Basic System Commands: Viewing system info (uname, df, du, free), shutdown/reboot (shutdown, reboot).

[Module 4: Processes, Services, and System Monitoring](./modules/mod4_processes_services_sys_monitoring.md)

- Process Management: Viewing processes (ps, top, htop), killing processes (kill, pkill), background/foreground jobs (&, fg, bg).
- Services and Daemons: Managing services with systemd (systemctl), enabling/disabling at boot.
- Logging and Monitoring: System logs (/var/log), using journalctl, basic troubleshooting with logs.
- Cron Jobs and Scheduling: Setting up automated tasks with crontab.

[Module 5: Networking Basics](https://www.notion.so/Module-5-Networking-Basics-25f9e8d05f4b804fbcbbd4793ec6b080?pvs=21)

- Network Configuration: IP addressing (IPv4/IPv6), configuring interfaces (ifconfig, ip command), DHCP vs. static IP.
- Common Network Tools: Ping, traceroute, netstat/ss, wget/curl for downloads.
- SSH and Remote Access: Setting up SSH server, key-based authentication, secure remote login.
- Firewall Basics: Using ufw or firewalld to manage rules.

[Module 6: Shell Scripting](https://www.notion.so/Module-6-Shell-Scripting-25f9e8d05f4b8055a408ec314b69fb5d?pvs=21)

- Scripting Fundamentals: Writing basic scripts, shebang (#!/bin/bash), variables, input/output.
- Control Structures: If-else, loops (for, while), case statements.
- Functions and Modular Scripting: Defining functions, passing arguments, error handling.
- Advanced Scripting: Regular expressions (grep, sed, awk), piping and redirection, scripting for automation (e.g., backups).

[Module 7: Advanced System Administration](https://www.notion.so/Module-7-Advanced-System-Administration-25f9e8d05f4b80848e34dd87fe7dd7d9?pvs=21)

- Disk Management: Partitioning with fdisk/gdisk, file systems (ext4, NTFS), mounting (mount, fstab), LVM basics.
- Backup and Recovery: Tools like rsync, tar, dd; disaster recovery strategies.
- Performance Tuning: Monitoring CPU/memory/disk (vmstat, iostat), swapping, kernel parameters.
- Security Essentials: SELinux/AppArmor basics, password policies, intrusion detection (fail2ban).

[Module 8: Networking and Security Advanced](https://www.notion.so/Module-8-Networking-and-Security-Advanced-25f9e8d05f4b80caa34dc12fd57d319e?pvs=21)

- Advanced Networking: Routing, VPN setup (OpenVPN), DNS configuration (bind), proxy servers.
- Web Servers and Services: Installing/configuring Apache/Nginx, virtual hosts, SSL/TLS with Let's Encrypt.
- Security Hardening: Firewalls (iptables/nftables), encryption (GPG), vulnerability scanning (nmap, OpenVAS).
- Containerization Basics: Introduction to Docker/Podman, images, containers, basic orchestration.

Plus much more …

---

---