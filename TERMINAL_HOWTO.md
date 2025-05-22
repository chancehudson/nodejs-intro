The terminal is a way to interact with the computer without a user interface. You are able to run commands in a directory (folder) on the computer.

To print your current directory use `pwd` (print working directory).

Directories are formatted as paths. `/tmp` for example, is usually a system temporary directory. There are some special paths:
- `.` - the current directory you're in
- `..` - the directory _above_ the current directory, aka the parent directory
- `/` - the root directory of the current hard drive
- `~` - the current users home directory

To list the contents of the directory you're current in use `ls`. You can also list the contents of a different directory by passing it as an argument like `ls /Applications`

To switch to a different directory use `cd new_dir`, where `new_dir` is the name of the directory.

