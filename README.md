# js-portfolio

### 🔎 Cómo trabajar en este proyecto?
El curso es totalmente práctico y progresivo. Este repositorio sólo existe como una guía para cuando lo necesites. Puedes realizar todo el curso en tu propio proyecto y tu propio repositorio.

Avanzamos en el curso a un nuevo tema y no puedes o no quieres completar los cambios anteriores para continuar? 
Empieza desde la etiqueta git correspondiente al módulo del curso.

#### Bonus: Cómo subo mis cambios a otro repositorio?
Git permite manejar varios repositorios remotos en una misma copia local. [Aquí encuentras más información](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) y te dejaré el cheatsheet a continuación:
```sh
# Crea tu nuevo repositorio en GitHub/GitLab/otro. 
# Asumamos la URL es git@github.com:jonalvarezz/mi-repo-mas-bello.git
# Agrega el nuevo remote

git remote add mi-repo git@github.com:ericgomez/mi-repo-mas-bello.git

# Para push
git push mi-repo branch-a-hacer-push


# Para pull
git pull mi-repo branch-a-hacer-push
```

### 🤖 Guía Rápida

1.  **Empieza a desarrollar.**

    Instala dependencias

    ```sh
    yarn
    ```

    Inicia el proyecto

    ```sh
    yarn dev
    ```

Happy hacking!
