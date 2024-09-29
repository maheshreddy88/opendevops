# Overview of Linux Commands

###### Network Management Commands
```
nmcli connection show
```

```
nmcli connection modify "Wired connection1" ipv4.address "172.24.10.10/24" ipv4.dns "172.24.10.254" ipv4.gateway "172.24.10.254" ipv4.method manual
```

```
nmcli connection reload
```

```
hostnamectl set-hostname node1.example.com
```

##### for graphical user interface
```
nmtui
```

###### linux commands
```
netstat -plnt
```

###### cut the first column with delimiter ':'
```
cat /etc/passwd | cut -d : -f 1 | sort -r
```

###### print the lines which match the given pattern
```
awk '/manager/ {print}' employee.txt
```

```
grep -i "abc" /root > /root/test.txt
```

```
yum repolist all
```

```
yum repolist
```

```
id joe
```

```
useradd -u 3456 -G sysadmin -s /sbin/nologin joe
```

```
echo "abc@123" | passwd --stdin joe
```

```
crontab -e -u joe
```

##### to synchronize time of your system with the server example.com
```
vim /etc/chrony.conf
server example.com iburst
:wq

systemctl restart chronyd.service
chrony sources -v
```

```
find / -user joe -exec cp -rvfp {} /root \;
```

##### reset root user password
```
ctrl+alt+del -> interrupt -> rescue kernel -> e -> come to line that start with linux and press ctrl+e -> rhgb quiet rd.break console=tty0 -> enter -> ctrl+x -> press enter key

mount -o remount,rw /sysroot/
chroot /sysroot/
passwd root
touch /.autorelabel
exit
exit
```

##### resize logical volume
```
df -hT
lvs
lvextend -L 100M /dev/mapper/myvg-mylv
resize2fs /dev/mapper/myvg-mylv
df -hT
```

##### configure system tuning
```
tuned-adm active

tuned-adm recommended

tuned-adm profile example

tuned-adm active
```

#####
```
```
