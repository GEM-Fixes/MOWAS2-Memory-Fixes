# Men of War: Assault Squad 2 — Memory Optimizer Patch

**English** · [Русский](#русский) · [Español](#español) · [Deutsch](#deutsch) · [中文](#中文)

> **Now with a 64-bit build!** The [64-bit build](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html#what) of the game has no 4 GB memory limit, is compatible with the normal, unpatched game in multiplayer and has the same turbo mode. It only works with [your own Steam copy](https://store.steampowered.com/app/244450/) of the game and is installed through the launcher. **[Read more](#the-64-bit-build)**
>
> ☕ Enjoying the fixes? **[Support the project on Ko-fi](https://ko-fi.com/mowas2mempatch)** — voluntary tips, nothing is unlocked by tipping. Thank you!

This [32-bit patch](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/), **Wild Memory Optimizations**, stops the game from crashing when it runs out of memory.
It works with all mods.
In multiplayer it also has **turbo mode**, a much faster battle simulation for big battles, used when every player in the match has it.

The game is a 32-bit program and can only use 4 GB of memory at a time. The patch makes it use that space far more efficiently and lets it make use of more of your PC's memory, so big mods and long matches fit. It is still a 32-bit game, but it now goes far beyond the limits of the base game: modded 8v8 matches no longer crash from running out of memory, even with 10 or more different factions.

Simply put: this is the most efficient and best way to play Men of War: Assault Squad 2, bar none.

This started as a patch among friends to play [RobZ](https://steamcommunity.com/sharedfiles/filedetails/?id=610304528) without crashing but has since grown into something hundreds of people have used to play.

It has expanded far beyond its original goal and all of this has only been possible with the help and contributions of the community with contributions from many different people.

**[How it works](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/)**: what the [32-bit patch](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/) does, explained simply, with measurements and animations.

**[The 64-bit build](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html)**: a version of the game with no 4 GB limit, and why 64-bit alone does not make battles faster.

**[Documentation](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/docs.html)**: install, update channels, the launcher, multiplayer, reports and troubleshooting.

## How to install

1. Close the game.
2. **[Download the launcher](https://github.com/GEM-Fixes/MOWAS2-Memory-Fixes/releases)** from the releases page.
3. Unzip the file. (Right-click it, then choose **Extract All**.)
4. Open the new folder. Double-click **MoWAS2-Launcher**.
5. Click **Yes**.
6. Click **Play**.

Done. The game starts with the patch.

## If Windows shows a warning

Windows does not know this program yet. That is normal.

- Click **More info**.
- Then click **Run anyway**.

## How to play next time

Double-click the **MoWAS2 Memory Fix** icon on your desktop. Click **Play**.

Always start the game with the launcher.

## Updates

You do not need to do anything. Click **Play** and you always get the newest version. Version 1.0.7 of the [32-bit patch](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/) is the stable version.

## Turbo mode

Turbo mode (Style v1, turbo mode 1.0.0) makes big battles much faster: in our test battles it needed about 5.6 to 9.9 times less simulation time than the unmodified game, more the bigger the battle. It is in both the [32-bit patch](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/#style) and the [64-bit build](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html#what), and they play it together in one match.

- Turbo mode is on when every player in the match has a version with it (32-bit 1.0.7-rev2 or the 64-bit build 1.0.0). Otherwise the match plays in vanilla compatibility mode, automatically: players with the patch or the 64-bit build can play together with players who run the normal, unpatched game.
- Stay in the lobby for about 15 seconds before the host starts.
- When the match is on screen, a chat line tells you the mode, for example "Memory Optimizer Patch: everyone in this match runs turbo mode 1.0.0 - turbo mode is on."

More: [Documentation: Multiplayer](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/docs.html#mp).

## The 64-bit build

The [64-bit build](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html#what) (version 1.0.0) is a 64-bit version of Men of War: Assault Squad 2 (game version 3.262). It is a new game program, built from a source reconstruction of the game, not a patch of the 32-bit program. It has no 4 GB memory limit, it is compatible with the normal, unpatched game in multiplayer, and it has the same turbo mode as the [32-bit patch](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/). **It only works with [your own Steam copy](https://store.steampowered.com/app/244450/) of the game.**

**[More about the 64-bit build](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html)**

### Did the game need 64-bit?

For years the community said that big mods crash with "Failed to allocate memory" and that the only real fix would be a 64-bit version of the game. The cause is right: a 32-bit program can only use 4 GB of memory, and big mods fill it.

But 64-bit is not the only way out. The [32-bit patch](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/#vaults) keeps the game inside its 4 GB: it moves data the game is not using right now (textures, models, sounds, animations) out of those 4 GB into your PC's normal memory, brings it back when it is needed, and stops memory from piling up from match to match. With the patch, we know of no mod that cannot be played.

The [64-bit build](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html#what) removes the 4 GB ceiling itself. **Both solve the memory problem.**

### Speed

64-bit alone does not make big battles faster: they are slow because of the battle simulation, and 64-bit gives more memory, not less of that work. What makes them much faster is turbo mode, and the 64-bit build has the same turbo mode 1.0.0 as the 32-bit patch: it played recorded real turbo multiplayer matches (Iwo Jima, Kansas, Grand Suburb, Okinawa with the RobZ Realism Mod, Abbad Big with the Cold War mod) just like the PC that recorded them, at the same speed as the 32-bit turbo (within a few percent). Both also have the same exact speed fixes (with the 32-bit patch about 1.5 to 1.7 times less simulation time in a 300-vs-300 soldier test battle, less in smaller ones).

### How it differs from the 32-bit patch

| | 32-bit patch | 64-bit build |
|---|---|---|
| What it is | A DLL that changes the original 32-bit game while it runs | A new game program |
| Memory limit | 4 GB of address space; unused data is kept outside it | No 4 GB limit |
| Memory crashes with big mods | Solved | Solved |
| Mods | Every mod we know of | The same mods |
| Speed in big battles | Exact speed fixes; turbo mode 1.0.0 | The same: exact speed fixes; turbo mode 1.0.0 |
| Where you get it | GitHub releases; the launcher installs and updates it | Only through the launcher |
| Which copy of the game | Your normal game | Only a Steam installation, with a Steam account that owns the game |

The [32-bit patch](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/) stays and is still maintained. The 64-bit build does not replace it.

### Playing with others

The 64-bit build is compatible with unpatched versions of the game: players with the 64-bit build or the 32-bit patch can play multiplayer together with players who run the normal, unpatched game. Such a match plays in vanilla compatibility mode; turbo mode is only on when everyone in the match has it. Real Steam matches with 64-bit and 32-bit players together have been played without out-of-sync errors. Turbo mode works between them too (see [Turbo mode](#turbo-mode)). 64-bit players see the chat line starting with "64-bit build: ...". Single player in the 64-bit build plays vanilla (no turbo).

### Mods

The 64-bit build works with the same mods as the 32-bit game.

### Install

You get the 64-bit build **only through the launcher**. It is not on GitHub and there is no separate download.

1. Install the launcher as described above and open it.
2. In the **Game to start** box, click **Install 64-bit**.
3. Click **Play (64-bit)**.

Both can stay installed: pick **32-bit game with the fix** or **64-bit build** in **Game to start**. **Uninstall 64-bit** removes the 64-bit build again; the 32-bit patch is not touched.

**You need the original game.** The 64-bit build only starts when it sits in the game's Steam folder next to the Steam `mowas_2.exe` and the game's files, Steam is running, the game's Steam file is Valve's original, and your Steam account owns [Men of War: Assault Squad 2](https://store.steampowered.com/app/244450/) and has it installed. Otherwise it shows a message (for example "Start Steam first: ...") and closes. The launcher installs it only into a Steam installation of the game.

## If something goes wrong

Open the launcher. Open **Tools** and click **Send report**.

That sends the crash files to the developer. You can also write a short message in the **Send feedback** box.

## How to remove it

1. Open the launcher.
2. If the 64-bit build is installed, click **Uninstall 64-bit**.
3. Open **Tools** and click **Remove the fix**.
4. Open **Tools** and click **Uninstall launcher**.

Your game is back to how it was.

## Installing without the launcher

While it is highly recommended to use the launcher, we recognize that some people may have different installations. Therefore, to install the [32-bit patch](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/) manually (the 64-bit build is only available through the launcher):

1. Close the game.
2. Download the zip (link above) and unzip it. You need only the file **xvidcore.dll** from it.
3. Open the game folder: the folder that contains **mowas_2.exe**.
   - Steam: right-click the game, then **Manage** > **Browse local files**.
   - Other versions (GOG or other copies): the folder you installed the game into. If you are not sure, right-click the game's desktop or Start menu shortcut and choose **Open file location**.
4. In the game folder, rename the game's own **xvidcore.dll** to **xvidcore_orig.dll**. The patch needs this file: do not delete it.
5. Copy **xvidcore.dll** from the zip into the game folder.
6. Start the game as usual.

To update later: copy only the new **xvidcore.dll** over the old one. Do not rename anything again.

To remove it: delete **xvidcore.dll**, then rename **xvidcore_orig.dll** back to **xvidcore.dll**.

After this you will be responsible for all updates and uploading crash reports yourself. Crash files are in **Documents\My Games\men of war - assault squad 2\log** (folders **minidumps** and **oos**).

## What the launcher sends

- An anonymous usage count once a day.
- Out-of-sync reports and crash records, automatically.
- Replays of finished matches for AI training, with player names and Steam IDs removed.

You can turn each of them off: click **Settings...** next to the language box in the launcher and untick its box.

---

## Русский

Этот [32-битный патч](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=ru), **Wild Memory Optimizations**, не даёт игре вылетать, когда ей не хватает памяти.
Он работает со всеми модами.
В мультиплеере в нём также есть **турбо-режим** — гораздо более быстрая симуляция больших боёв, если он есть у всех игроков матча.

Игра — 32-битная программа и может одновременно использовать только 4 ГБ памяти. Патч позволяет ей расходовать это место гораздо эффективнее и использовать больше памяти вашего компьютера, поэтому большие моды и долгие матчи помещаются. Игра по-прежнему 32-битная, но теперь далеко выходит за пределы оригинала: модовые матчи 8 на 8 больше не вылетают из-за нехватки памяти, даже с 10 и более разными фракциями.

Проще говоря: это самый эффективный и лучший способ играть в Men of War: Assault Squad 2 — без исключений.

**[Как это работает](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=ru)**: что делает патч, простыми словами, с замерами и анимациями.

**[64-битная версия](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=ru)**: версия игры без ограничения в 4 ГБ. **[Документация](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/docs.html?lang=ru)**: установка, каналы обновлений, лаунчер, настройки, мультиплеер, отчёты и решение проблем.

### Как установить

1. Закройте игру.
2. **[Скачайте лаунчер](https://github.com/GEM-Fixes/MOWAS2-Memory-Fixes/releases)** со страницы релизов.
3. Распакуйте файл. (Щёлкните по нему правой кнопкой мыши и выберите **Извлечь все**.)
4. Откройте новую папку. Дважды щёлкните **MoWAS2-Launcher**.
5. Нажмите **Да**.
6. Нажмите **Играть**.

Готово. Игра запустится с патчем.

### Если Windows показывает предупреждение

Windows ещё не знает эту программу. Это нормально.

- Нажмите **Подробнее**.
- Затем нажмите **Выполнить в любом случае**.

### Как играть в следующий раз

Дважды щёлкните значок **MoWAS2 Memory Fix** на рабочем столе. Нажмите **Играть**.

Всегда запускайте игру через лаунчер.

### Обновления

Ничего делать не нужно. Нажмите **Играть** — и у вас всегда будет самая новая версия. Версия 1.0.7 [32-битного патча](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=ru) — стабильная.

### Турбо-режим

Турбо-режим (Style v1, турбо-режим 1.0.0) сильно ускоряет большие бои: в наших тестовых боях симуляции нужно было примерно в 5,6–9,9 раза меньше времени, чем в обычной игре, и тем больше, чем больше бой. Он есть и в [32-битном патче](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=ru#style), и в [64-битной версии](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=ru#what), и они играют в нём вместе в одном матче.

- Турбо-режим включается, когда у каждого игрока в матче версия с ним (32-битная 1.0.7-rev2 или 64-битная версия 1.0.0). Иначе матч автоматически идёт в режиме совместимости с ванильной игрой, и можно играть с теми, у кого патча нет.
- Подождите в лобби около 15 секунд, прежде чем хост запустит матч.
- Когда матч появился на экране, строка в чате сообщает режим, например "Memory Optimizer Patch: everyone in this match runs turbo mode 1.0.0 - turbo mode is on."

### 64-битная версия

[64-битная версия](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=ru#what) (1.0.0) — новая программа игры без ограничения памяти в 4 ГБ. Она использует те же файлы игры и те же моды, в мультиплеере совместима с обычной игрой без патча (с ней можно играть вместе в режиме совместимости с ванильной игрой), и в ней тот же турбо-режим. Сама по себе 64-битность бои не ускоряет. **Работает только с [вашей собственной копией игры в Steam](https://store.steampowered.com/app/244450/).**

- Получить её можно **только через лаунчер**: её нет на GitHub и нет отдельной загрузки. В поле **Какую игру запускать** нажмите **Установить 64-bit**, затем **Играть (64-bit)**. Лаунчер скачивает её, проверяет по подписанному списку обновлений и кладёт в папку игры.
- Обе версии могут быть установлены одновременно; **Удалить 64-bit** удаляет 64-битную версию, 32-битный патч не затрагивается.
- 64-битная версия запускается, только если она лежит в папке игры Steam рядом с `mowas_2.exe` из Steam, Steam запущен, файл Steam игры оригинальный от Valve, а ваш аккаунт Steam владеет игрой и она установлена. Иначе она показывает сообщение и закрывается.
- Одиночная игра в 64-битной версии идёт без турбо.

Подробнее: **[64-битная версия](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=ru)**.

### Если что-то пошло не так

Откройте лаунчер. Откройте **Инструменты** и нажмите **Отправить отчёт**.

Файлы о вылете будут отправлены разработчику. Можно также написать короткое сообщение в поле **Отправить отзыв**.

### Как удалить

1. Откройте лаунчер.
2. Если установлена 64-битная версия, нажмите **Удалить 64-bit**.
3. Откройте **Инструменты** и нажмите **Удалить патч**.
4. Откройте **Инструменты** и нажмите **Удалить лаунчер**.

Игра снова будет такой, как была.

### Установка без лаунчера

Мы настоятельно рекомендуем пользоваться лаунчером, но понимаем, что у некоторых игроков игра может быть установлена иначе. Поэтому установка [32-битного патча](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=ru) вручную (64-битная версия есть только в лаунчере):

1. Закройте игру.
2. Скачайте zip (ссылка выше) и распакуйте его. Из него нужен только файл **xvidcore.dll**.
3. Откройте папку игры: папку, в которой лежит **mowas_2.exe**.
   - Steam: правый клик по игре, затем **Управление** > **Просмотреть локальные файлы**.
   - Другие версии (GOG или другие копии): папка, в которую вы установили игру. Если не уверены, нажмите правой кнопкой на ярлык игры на рабочем столе или в меню «Пуск» и выберите **Расположение файла**.
4. В папке игры переименуйте собственный **xvidcore.dll** игры в **xvidcore_orig.dll**. Этот файл нужен патчу: не удаляйте его.
5. Скопируйте **xvidcore.dll** из zip в папку игры.
6. Запускайте игру как обычно.

Как обновить позже: просто скопируйте новый **xvidcore.dll** поверх старого. Ничего больше не переименовывайте.

Как удалить: удалите **xvidcore.dll**, затем переименуйте **xvidcore_orig.dll** обратно в **xvidcore.dll**.

После этого вы сами отвечаете за все обновления и за отправку отчётов о вылетах. Файлы вылетов лежат в **Документы\My Games\men of war - assault squad 2\log** (папки **minidumps** и **oos**).

### Что отправляет лаунчер

- Анонимный счётчик использования раз в день.
- Отчёты о рассинхронизации и записи о вылетах, автоматически.
- Записи завершённых матчей для обучения ИИ, без имён игроков и Steam ID.

Каждую из этих отправок можно отключить: нажмите **Настройки...** рядом с выбором языка в лаунчере и снимите нужную галочку.

---

## Español

Este [parche de 32 bits](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=es), **Wild Memory Optimizations**, evita que el juego se cierre por falta de memoria.
Funciona con todos los mods.
En multijugador también tiene el **modo turbo**, una simulación mucho más rápida para las batallas grandes, que se usa si todos los jugadores de la partida lo tienen.

El juego es un programa de 32 bits y solo puede usar 4 GB de memoria a la vez. El parche hace que aproveche ese espacio mucho mejor y que pueda usar más memoria de tu PC, así caben los mods grandes y las partidas largas. Sigue siendo un juego de 32 bits, pero ahora supera con creces los límites del juego base: las partidas 8 contra 8 con mods ya no se cierran por falta de memoria, incluso con 10 o más facciones distintas.

En pocas palabras: es la forma más eficiente y la mejor de jugar a Men of War: Assault Squad 2, sin excepción.

**[Cómo funciona](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=es)**: qué hace el parche, explicado de forma sencilla, con mediciones y animaciones.

**[Versión de 64 bits](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=es)**: una versión del juego sin el límite de 4 GB. **[Documentación](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/docs.html?lang=es)**: instalación, canales de actualización, el lanzador, ajustes, multijugador, informes y solución de problemas.

### Cómo instalarlo

1. Cierra el juego.
2. **[Descarga el lanzador](https://github.com/GEM-Fixes/MOWAS2-Memory-Fixes/releases)** desde la página de versiones.
3. Descomprime el archivo. (Haz clic derecho sobre él y elige **Extraer todo**.)
4. Abre la nueva carpeta. Haz doble clic en **MoWAS2-Launcher**.
5. Haz clic en **Sí**.
6. Haz clic en **Jugar**.

Listo. El juego se inicia con el parche.

### Si Windows muestra un aviso

Windows todavía no conoce este programa. Es normal.

- Haz clic en **Más información**.
- Después haz clic en **Ejecutar de todas formas**.

### Cómo jugar la próxima vez

Haz doble clic en el icono **MoWAS2 Memory Fix** del escritorio. Haz clic en **Jugar**.

Inicia siempre el juego con el lanzador.

### Actualizaciones

No tienes que hacer nada. Haz clic en **Jugar** y siempre tendrás la versión más reciente. La versión 1.0.7 del [parche de 32 bits](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=es) es la versión estable.

### Modo turbo

El modo turbo (Style v1, modo turbo 1.0.0) hace mucho más rápidas las batallas grandes: en nuestras batallas de prueba la simulación necesitó entre 5,6 y 9,9 veces menos tiempo que en el juego sin modificar, más cuanto mayor es la batalla. Está en el [parche de 32 bits](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=es#style) y en la [versión de 64 bits](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=es#what), y los dos lo juegan juntos en la misma partida.

- El modo turbo se activa cuando todos los jugadores de la partida tienen una versión con él (32 bits 1.0.7-rev2 o la versión de 64 bits 1.0.0). Si no, la partida se juega automáticamente en modo de compatibilidad vanilla, y puedes jugar con quien no tenga el parche.
- Espera unos 15 segundos en la sala antes de que el anfitrión inicie la partida.
- Cuando la partida aparece en pantalla, una línea del chat te dice el modo, por ejemplo "Memory Optimizer Patch: everyone in this match runs turbo mode 1.0.0 - turbo mode is on."

### La versión de 64 bits

La [versión de 64 bits](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=es#what) (1.0.0) es un nuevo programa del juego sin el límite de memoria de 4 GB. Usa los mismos archivos del juego y los mismos mods, es compatible en multijugador con el juego normal sin parchear (se juega junto en modo de compatibilidad vanilla) y tiene el mismo modo turbo. Los 64 bits por sí solos no hacen más rápidas las batallas. **Solo funciona con [tu propia copia del juego en Steam](https://store.steampowered.com/app/244450/).**

- Solo se consigue **a través del lanzador**: no está en GitHub y no hay descarga aparte. En el cuadro **Juego que se inicia**, haz clic en **Instalar 64 bits** y luego en **Jugar (64-bit)**. El lanzador la descarga, la comprueba con la lista de actualizaciones firmada y la coloca en la carpeta del juego.
- Las dos pueden quedar instaladas; **Desinstalar 64 bits** quita la versión de 64 bits y no toca el parche de 32 bits.
- La versión de 64 bits solo arranca si está en la carpeta del juego de Steam junto al `mowas_2.exe` de Steam, Steam está abierto, el archivo de Steam del juego es el original de Valve y tu cuenta de Steam tiene el juego y lo tiene instalado. Si no, muestra un mensaje y se cierra.
- Un jugador en la versión de 64 bits juega en solitario en modo vanilla (sin turbo).

Más: **[versión de 64 bits](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=es)**.

### Si algo sale mal

Abre el lanzador. Abre **Herramientas** y haz clic en **Enviar informe**.

Así se envían los archivos del cierre al desarrollador. También puedes escribir un mensaje corto en el cuadro **Enviar opinión**.

### Cómo quitarlo

1. Abre el lanzador.
2. Si tienes instalada la versión de 64 bits, haz clic en **Desinstalar 64 bits**.
3. Abre **Herramientas** y haz clic en **Quitar el parche**.
4. Abre **Herramientas** y haz clic en **Desinstalar el lanzador**.

Tu juego vuelve a estar como antes.

### Instalar sin el lanzador

Aunque recomendamos encarecidamente usar el lanzador, sabemos que algunas personas pueden tener instalaciones distintas. Por eso, para instalar el [parche de 32 bits](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=es) a mano (la versión de 64 bits solo está en el lanzador):

1. Cierra el juego.
2. Descarga el zip (enlace de arriba) y descomprímelo. Solo necesitas el archivo **xvidcore.dll**.
3. Abre la carpeta del juego: la carpeta que contiene **mowas_2.exe**.
   - Steam: clic derecho en el juego, luego **Administrar** > **Ver archivos locales**.
   - Otras versiones (GOG u otras copias): la carpeta donde instalaste el juego. Si no estás seguro, haz clic derecho en el acceso directo del juego en el escritorio o en el menú Inicio y elige **Abrir ubicación del archivo**.
4. En la carpeta del juego, cambia el nombre del **xvidcore.dll** original del juego a **xvidcore_orig.dll**. El parche necesita este archivo: no lo borres.
5. Copia el **xvidcore.dll** del zip a la carpeta del juego.
6. Inicia el juego como siempre.

Para actualizar más tarde: copia solo el nuevo **xvidcore.dll** encima del anterior. No vuelvas a cambiar ningún nombre.

Para quitarlo: borra **xvidcore.dll** y vuelve a llamar **xvidcore.dll** al archivo **xvidcore_orig.dll**.

A partir de aquí, las actualizaciones y el envío de informes de fallos corren por tu cuenta. Los archivos de fallos están en **Documentos\My Games\men of war - assault squad 2\log** (carpetas **minidumps** y **oos**).

### Qué envía el lanzador

- Un recuento de uso anónimo una vez al día.
- Informes de desincronización y registros de cierres, automáticamente.
- Repeticiones de partidas terminadas para entrenar IA, sin nombres de jugadores ni Steam ID.

Puedes desactivar cada uno: haz clic en **Ajustes...** junto al selector de idioma del lanzador y desmarca su casilla.

---

## Deutsch

Dieser [32-Bit-Patch](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=de), **Wild Memory Optimizations**, verhindert, dass das Spiel abstürzt, wenn ihm der Speicher ausgeht.
Er funktioniert mit allen Mods.
Im Mehrspieler hat er außerdem den **Turbo-Modus**, eine viel schnellere Simulation für große Schlachten, wenn alle Spieler im Match ihn haben.

Das Spiel ist ein 32-Bit-Programm und kann gleichzeitig nur 4 GB Speicher nutzen. Der Patch lässt es diesen Platz viel effizienter nutzen und mehr vom Arbeitsspeicher deines PCs verwenden, damit auch große Mods und lange Matches passen. Es bleibt ein 32-Bit-Spiel, geht jetzt aber weit über die Grenzen des Grundspiels hinaus: gemoddete 8-gegen-8-Matches stürzen nicht mehr wegen Speichermangel ab, selbst mit 10 oder mehr verschiedenen Fraktionen.

Kurz gesagt: Das ist die effizienteste und beste Art, Men of War: Assault Squad 2 zu spielen – ohne Ausnahme.

**[So funktioniert es](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=de)**: was der Patch macht, einfach erklärt, mit Messwerten und Animationen.

**[64-Bit-Version](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=de)**: eine Version des Spiels ohne 4-GB-Grenze. **[Dokumentation](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/docs.html?lang=de)**: Installation, Update-Kanäle, der Launcher, Einstellungen, Mehrspieler, Berichte und Problemlösung.

### So installierst du ihn

1. Schließe das Spiel.
2. **[Lade den Launcher herunter](https://github.com/GEM-Fixes/MOWAS2-Memory-Fixes/releases)** (Seite mit den Releases).
3. Entpacke die Datei. (Rechtsklick darauf, dann **Alle extrahieren** wählen.)
4. Öffne den neuen Ordner. Doppelklicke auf **MoWAS2-Launcher**.
5. Klicke auf **Ja**.
6. Klicke auf **Spielen**.

Fertig. Das Spiel startet mit dem Patch.

### Wenn Windows eine Warnung zeigt

Windows kennt dieses Programm noch nicht. Das ist normal.

- Klicke auf **Weitere Informationen**.
- Klicke dann auf **Trotzdem ausführen**.

### So spielst du beim nächsten Mal

Doppelklicke auf das Symbol **MoWAS2 Memory Fix** auf deinem Desktop. Klicke auf **Spielen**.

Starte das Spiel immer über den Launcher.

### Updates

Du musst nichts tun. Klicke auf **Spielen** und du bekommst immer die neueste Version. Version 1.0.7 des [32-Bit-Patches](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=de) ist die stabile Version.

### Turbo-Modus

Der Turbo-Modus (Style v1, Turbo-Modus 1.0.0) macht große Schlachten viel schneller: In unseren Testschlachten brauchte die Simulation etwa 5,6- bis 9,9-mal weniger Zeit als im unveränderten Spiel, umso mehr, je größer die Schlacht. Er steckt sowohl im [32-Bit-Patch](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=de#style) als auch in der [64-Bit-Version](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=de#what), und beide spielen ihn zusammen in einem Match.

- Der Turbo-Modus ist an, wenn jeder Spieler im Match eine Version mit ihm hat (32-Bit 1.0.7-rev2 oder die 64-Bit-Version 1.0.0). Sonst läuft das Match automatisch im Vanilla-Kompatibilitätsmodus, und du kannst weiter mit Leuten ohne Patch spielen.
- Warte etwa 15 Sekunden in der Lobby, bevor der Host das Match startet.
- Sobald das Match auf dem Bildschirm ist, nennt dir eine Chatzeile den Modus, zum Beispiel "Memory Optimizer Patch: everyone in this match runs turbo mode 1.0.0 - turbo mode is on."

### Die 64-Bit-Version

Die [64-Bit-Version](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=de#what) (1.0.0) ist ein neues Spielprogramm ohne 4-GB-Speichergrenze. Sie nutzt dieselben Spieldateien und dieselben Mods, ist im Mehrspieler mit dem normalen, ungepatchten Spiel kompatibel (man spielt zusammen im Vanilla-Kompatibilitätsmodus) und hat denselben Turbo-Modus. 64 Bit allein machen Schlachten nicht schneller. **Sie läuft nur mit [deiner eigenen Steam-Kopie des Spiels](https://store.steampowered.com/app/244450/).**

- Du bekommst sie **nur über den Launcher**: Sie ist nicht auf GitHub, und es gibt keinen eigenen Download. Klicke im Feld **Welches Spiel startet** auf **64-Bit installieren** und dann auf **Spielen (64-bit)**. Der Launcher lädt sie herunter, prüft sie mit der signierten Update-Liste und legt sie in den Spielordner.
- Beide können installiert bleiben; **64-Bit deinstallieren** entfernt die 64-Bit-Version, der 32-Bit-Patch bleibt unberührt.
- Die 64-Bit-Version startet nur, wenn sie im Steam-Ordner des Spiels neben der Steam-`mowas_2.exe` liegt, Steam läuft, die Steam-Datei des Spiels das Original von Valve ist und dein Steam-Konto das Spiel besitzt und installiert hat. Sonst zeigt sie eine Meldung und schließt sich.
- Im Einzelspieler spielt die 64-Bit-Version Vanilla (ohne Turbo).

Mehr: **[64-Bit-Version](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=de)**.

### Wenn etwas schiefgeht

Öffne den Launcher. Öffne **Werkzeuge** und klicke auf **Bericht senden**.

Damit werden die Absturzdateien an den Entwickler gesendet. Du kannst auch eine kurze Nachricht in das Feld **Feedback senden** schreiben.

### So entfernst du ihn

1. Öffne den Launcher.
2. Wenn die 64-Bit-Version installiert ist, klicke auf **64-Bit deinstallieren**.
3. Öffne **Werkzeuge** und klicke auf **Patch entfernen**.
4. Öffne **Werkzeuge** und klicke auf **Launcher deinstallieren**.

Dein Spiel ist wieder so wie vorher.

### Installation ohne Launcher

Wir empfehlen dringend, den Launcher zu benutzen, wissen aber, dass manche Spieler eine andere Installation haben. Deshalb so geht die manuelle Installation des [32-Bit-Patches](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=de) (die 64-Bit-Version gibt es nur über den Launcher):

1. Schließe das Spiel.
2. Lade die zip-Datei herunter (Link oben) und entpacke sie. Du brauchst daraus nur die Datei **xvidcore.dll**.
3. Öffne den Spielordner: den Ordner, in dem **mowas_2.exe** liegt.
   - Steam: Rechtsklick auf das Spiel, dann **Verwalten** > **Lokale Dateien durchsuchen**.
   - Andere Versionen (GOG oder andere Kopien): der Ordner, in den du das Spiel installiert hast. Wenn du unsicher bist, klicke mit rechts auf die Verknüpfung des Spiels auf dem Desktop oder im Startmenü und wähle **Dateipfad öffnen**.
4. Benenne im Spielordner die originale **xvidcore.dll** des Spiels in **xvidcore_orig.dll** um. Der Patch braucht diese Datei: nicht löschen.
5. Kopiere die **xvidcore.dll** aus der zip-Datei in den Spielordner.
6. Starte das Spiel wie gewohnt.

Später aktualisieren: kopiere nur die neue **xvidcore.dll** über die alte. Benenne nichts noch einmal um.

Zum Entfernen: lösche **xvidcore.dll** und benenne **xvidcore_orig.dll** wieder in **xvidcore.dll** um.

Danach bist du selbst für alle Updates und das Hochladen von Absturzberichten verantwortlich. Die Absturzdateien liegen unter **Dokumente\My Games\men of war - assault squad 2\log** (Ordner **minidumps** und **oos**).

### Was der Launcher sendet

- Einmal am Tag eine anonyme Nutzungszählung.
- Berichte über Synchronisationsfehler und Absturzdaten, automatisch.
- Replays beendeter Matches für KI-Training, ohne Spielernamen und Steam-IDs.

Du kannst jedes davon ausschalten: Klicke im Launcher neben der Sprachauswahl auf **Einstellungen...** und entferne das Häkchen.

---

## 中文

这个 [32 位补丁](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=zh)（**Wild Memory Optimizations**）可以防止游戏因内存不足而崩溃。
它适用于所有模组。
在多人游戏中它还带有**加速模式**：当对战中每位玩家都有它时，大型战斗的模拟会快得多。

本游戏是 32 位程序，同一时间最多只能使用 4 GB 内存。补丁让游戏更高效地利用这部分空间，并能使用更多电脑内存，因此大型模组和长时间对战也能顺利运行。虽然它仍是 32 位游戏，但现在已远远超出原版游戏的极限：使用模组的 8v8 对战不再因内存不足而崩溃，即使有 10 个甚至更多不同阵营也是如此。

简而言之：这是游玩《Men of War: Assault Squad 2》最高效、最好的方式，没有之一。

**[工作原理](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=zh)**：用简单的话说明补丁做了什么，附实测数据和动画。

**[64 位版本](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=zh)**：没有 4 GB 限制的游戏版本。**[文档](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/docs.html?lang=zh)**：安装、更新渠道、启动器、设置、多人游戏、报告和故障排除。

### 如何安装

1. 关闭游戏。
2. 从发布页面**[下载启动器](https://github.com/GEM-Fixes/MOWAS2-Memory-Fixes/releases)**。
3. 解压文件。（右键点击它，然后选择 **全部解压缩**。）
4. 打开新文件夹。双击 **MoWAS2-Launcher**。
5. 点击 **是**。
6. 点击 **开始游戏**。

完成。游戏会带着补丁启动。

### 如果 Windows 显示警告

Windows 还不认识这个程序。这是正常的。

- 点击 **更多信息**。
- 然后点击 **仍要运行**。

### 下次如何游戏

双击桌面上的 **MoWAS2 Memory Fix** 图标。点击 **开始游戏**。

请始终通过启动器启动游戏。

### 更新

你什么都不用做。点击 **开始游戏**，就总能得到最新版本。[32 位补丁](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=zh)的 1.0.7 版本是稳定版。

### 加速模式

加速模式（Style v1，加速模式 1.0.0）让大型战斗快得多：在我们的测试战斗中，模拟所需时间比未修改的游戏少约 5.6 到 9.9 倍，战斗越大差距越大。[32 位补丁](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=zh#style)和 [64 位版本](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=zh#what)都带有它，两者可以在同一场对战中一起使用。

- 当对战中每位玩家的版本都带有加速模式时（32 位 1.0.7-rev2 或 64 位版本 1.0.0），它就会开启。否则对战会自动以原版兼容模式进行，你仍然可以和没有补丁的玩家一起玩。
- 房主开始对战前，请在大厅里等待约 15 秒。
- 对战画面出现后，聊天栏会有一行文字告诉你当前模式，例如 "Memory Optimizer Patch: everyone in this match runs turbo mode 1.0.0 - turbo mode is on."

### 64 位版本

[64 位版本](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=zh#what)（1.0.0）是一个没有 4 GB 内存限制的新游戏程序。它使用相同的游戏文件和相同的模组，在多人游戏中与未打补丁的普通游戏兼容（以原版兼容模式一起游戏），并带有相同的加速模式。单靠 64 位并不会让战斗变快。**它只能配合[你自己的 Steam 正版游戏](https://store.steampowered.com/app/244450/)使用。**

- **只能通过启动器获得**：GitHub 上没有它，也没有单独的下载。在 **启动哪个版本** 中点击 **安装 64 位版**，然后点击 **开始游戏 (64-bit)**。启动器会下载它，用签名的更新列表校验，然后放进游戏文件夹。
- 两个版本可以同时安装；**卸载 64 位版** 会移除 64 位版本，不会影响 32 位补丁。
- 只有在以下条件都满足时 64 位版本才会启动：它位于游戏的 Steam 文件夹中、Steam 版 `mowas_2.exe` 旁边；Steam 正在运行；游戏的 Steam 文件是 Valve 的原版；你的 Steam 账户拥有并已安装本游戏。否则它会显示提示并关闭。
- 64 位版本的单人游戏以原版方式运行（没有加速模式）。

更多：**[64 位版本](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/x64.html?lang=zh)**。

### 如果出现问题

打开启动器。打开 **工具**，点击 **发送报告**。

这样就会把崩溃文件发送给开发者。你也可以在 **发送反馈** 框里写一条简短留言。

### 如何移除

1. 打开启动器。
2. 如果装了 64 位版本，点击 **卸载 64 位版**。
3. 打开 **工具**，点击 **移除补丁**。
4. 打开 **工具**，点击 **卸载启动器**。

你的游戏会恢复原样。

### 不使用启动器安装

我们强烈建议使用启动器，但我们也理解有些玩家的游戏安装方式不同。因此，手动安装 [32 位补丁](https://gem-fixes.github.io/MOWAS2-Memory-Fixes/?lang=zh)的方法如下（64 位版本只能通过启动器获得）：

1. 关闭游戏。
2. 下载 zip 文件（见上方链接）并解压。只需要其中的 **xvidcore.dll** 文件。
3. 打开游戏文件夹：也就是包含 **mowas_2.exe** 的文件夹。
   - Steam：右键点击游戏，然后选择 **管理** > **浏览本地文件**。
   - 其他版本（GOG 或其他副本）：你安装游戏时选择的文件夹。如果不确定，请右键点击桌面或开始菜单中的游戏快捷方式，选择 **打开文件所在的位置**。
4. 在游戏文件夹中，把游戏自带的 **xvidcore.dll** 重命名为 **xvidcore_orig.dll**。补丁需要这个文件：不要删除它。
5. 把 zip 中的 **xvidcore.dll** 复制到游戏文件夹。
6. 像平常一样启动游戏。

以后更新：只需用新的 **xvidcore.dll** 覆盖旧文件。不要再次重命名任何文件。

移除方法：删除 **xvidcore.dll**，然后把 **xvidcore_orig.dll** 改回 **xvidcore.dll**。

此后，所有更新以及上传崩溃报告都需要你自己负责。崩溃文件位于 **文档\My Games\men of war - assault squad 2\log**（**minidumps** 和 **oos** 文件夹）。

### 启动器会发送什么

- 每天一次匿名使用计数。
- 不同步报告和崩溃记录，自动发送。
- 已结束对战的回放，用于 AI 训练，已去除玩家名称和 Steam ID。

每一项都可以关闭：点击启动器中语言框旁边的 **设置...**，取消勾选对应的复选框。

---

**Do not redistribute.** · **Не распространять.** · **Prohibida su redistribución.** · **Weitergabe nicht gestattet.** · **禁止转载。**
