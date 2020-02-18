## Installing
```bash
npm i -g viper-module
```

## Usage

Create a module named **Menu** in the current directory by using a predefined template **SKScene** 
```bash
cd /path/to/module/parent/folder
vm create Menu SKScene
```

Rename a module **Menu** to **Start**. It renames the module components as well (Presenter, Interactor, etc.)
```bash
cd /path/to/module/parent/folder
vm rename Menu Start
```


Currently available templates: **SKScene**, **SKNode**