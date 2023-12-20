export default `
§ recommendations.modal.cancel: Закрыть
§ recommendations.title
Рекомендации и факты

§ recommendations.timestamp.firstCommit.description
сделал первый коммит

День недели: $1

§ recommendations.timestamp.lastCommit.description
сделал последний коммит

День недели: $1

§ recommendations.timestamp.common.title: $1 дней
§ recommendations.timestamp.allDays.description: от первого до последнего коммита (включая выходные и праздники).
§ recommendations.timestamp.lossesDays.description: без коммитов, даже с учётом выходных, отпуска и государственных праздников.
§ recommendations.timestamp.weekendDays.description
работы на выходных

# Почему это плохо:
- заказчик платит двойную цену за работу в выходной день;
- сотрудники быстрее выгорают;

§ recommendations.timestamp.regularWeekendWord.title: Регулярные переработки
§ recommendations.timestamp.sometimeWeekendWord.title: Бывают переработки
§ recommendations.timestamp.weekendWord.description
Вероятно, стоит сменить менеджера проекта, аналитика и архитектора.

# Почему это плохо:
- заказчик платит двойную цену за работу в выходной день;
- качество продукта, как правило, получается низкое;
- часть сотрудников увольняется;
- из-за спешки появляются новые ошибки;

# Скорее всего:
- неверно оценили сроки в самом начале;
- тех. задание отсутствует;
- слабая аналитика;
- слабая архитектура (архитектора не нанимали, а команда состоит из мидл разработчиков);
- сначала начали писать код, потом проектировать;
- нет нормальных процессов, чтобы понять ошибки;

§ recommendations.timestamp.neverWeekendWord.title: Обычно без переработок
§ recommendations.timestamp.neverWeekendWord.description
Но иногда бывают.

# Почему это плохо:
- заказчик платит двойную цену за работу в выходной день;
- сотрудники быстрее выгорают;

§ recommendations.scope.parallelism.not.title
Нет параллельных работ

§ recommendations.scope.parallelism.not.description
любую фичу в один момент времени делает один человек.

# Метод расчёта:
- человеко-дни делятся на фактические дни для каждой фичи;
- находим среднее арифметическое;
- если результат меньше 1.3 считаем, что параллельных работ в рамках большинства фичей обычно нет;

# Почему это плохо:
- повышается bus factor;
- сотрудники медленнее развиваются;
- трудно качественно проверить работу сотрудника;

# Почему это хорошо:
- появляются эксперты, которые очень глубоко погружены в предметную область и могут предложить более качественные решения;
- скорее всего не бывает merge конфликтов;
- проект может очень быстро параллельно развиваться в разные стороны;

§ recommendations.scope.parallelism.has.title
Часть работ параллельно

§ recommendations.scope.parallelism.has.description
Иногда фичу делают одновременно несколько человек.

# Метод расчёта:
- человеко-дни делятся на фактические дни для каждой фичи;
- находим среднее арифметическое;
- если результат от 1.3 до 2.0 считаем, что часть работ в рамках разных фичей иногда делается параллельно;


§ recommendations.scope.parallelism.every.title
Параллельные работы

§ recommendations.scope.parallelism.every.description
любую фичу в один момент времени делают несколько человек

# Метод расчёта:
- человеко-дни делятся на фактические дни для каждой фичи;
- находим среднее арифметическое;
- если результат больше двух считаем, что большая часть работ в рамках разных фичей обычно делается параллельно;


§ recommendations.scope.money
в такую сумму можно оценить работу по данному проекту.

# Метод расчёта:
- человеко-дни затраченные на разработку умножаются на индивидуальную зарплату разработчиков;

Изменить зарплату каждого разработчика, для более точной суммы, можно в разделе «Настройки»

# Это много или мало?
Для ответа на этот вопрос, нужно ответить на следующие:
- Можно ли за эти деньги было купить готовое решение?
- Можно ли за эти деньги сделать более хороший продукт?

Если ответ на оба вопроса «да», то возможно, разработка с нуля не стоила потраченных на неё денег.
 
§ recommendations.scope.bus.everyHasOne.title
Bus factor = 1

§ recommendations.scope.bus.everyHasOne.description
В большинство фич погружен один человек.
Надо переключать людей.

# Почему это плохо:
- если сотрудники будут увольняться, будет трудно продолжить их работу;
- невозможно контролировать качество его кода;

# Как делается выборка:
- более 80% коммитов в фичу делает один человек;
- проект имеет более 60% таких фичей;

§ recommendations.scope.bus.oneMaintainer
в фичи погружен один человек.

# Почему это плохо:
- если он уволится, будет трудно продолжить разработку;
- снижается качество code-review;
- трудно запараллелить разработку при необходимости;

# Как делается выборка:
- более 80% коммитов в фичу сделал один человек;

§ recommendations.scope.types.process.title
Плохие процессы

§ recommendations.scope.types.process.description
Большинство фич содержат один тип задач.

§ recommendations.scope.types.one
фичи содержат один тип задач.

§ recommendations.scope.types.common
Возможно, разработчики неправильно подписывают коммиты или менеджер заводит один и тот же тип задач.

# Почему это важно:
- невозможно передать поддержку другой команде;
- невозможно выпустить "коробочную" версию;
- сильная зависимость от конкретных разработчиков;
- большое количество ошибок и низкое качество кода;
- вероятное замедление разработки в будущем;

# В чём ошибка менеджера:
- взгляд на продукт, только с позиции «работающей демки»;

# Что должно быть:
- тесты;
- ошибки (выявленные по результатам тестов);
- рефакторинг (т.к. архитектура может измениться);
- документация;
- правки стиля (как результат опроса фокус-группы);

§ recommendations.scope.plan.title
Постройте долгосрочный план

§ recommendations.scope.plan.description
с учетом архитектуры.

При том опираться этот план должен сразу на самые трудные задачи.

# Почему отсутствие плана плохо:
- сотрудники делают минимально работающую версию, не закладывая точки расширения. После этого пишется не масштабируемый код, который тормозит следующие фичи;

# В чём ошибка менеджера:
- он не показал, как продукт будет развиваться далее и в каких точках будет рост;

# Как должно быть:
- составляется глобальный план развития продукта;
- составляется глобальный план развития архитектуры (с разработчиками и DBA);
- на уровне схем сразу проговариваются моменты, которые могут сильно измениться;

§ recommendations.scope.cost.title
Оцените инвестиции в фичу

§ recommendations.scope.cost.description
с количеством потенциальной прибыли.

Фичи которые дорого стоят в разработке, но приносят мало прибыли, возможно, стоит отложить или вообще отменить. Это сделает проект более коммерчески успешным.

§ recommendations.author.lotOfLazy
пишет слишком мало кода.

# Может уволить?
- он тимлид, архитектор, аналитик?
- это его основной проект?
- есть какие-то зависимости от него?

# Почему нет смысла исправлять
Суммарные затраты на разработчика уже больше чем прибыль от его работы.
Если мы считаем, что объективных помех его работе не было, то человек либо не хочет работать вообще, либо работает на двух проектах одновременно.
Увольнение и замена новым сотрудником выглядит оправданным с точки зрения общей статистики.

§ recommendations.author.manyLazy
пишет мало кода. Нужно взять на контроль.

# Как делается выборка:
- на тестовых выборках хороший программист пишет код больше 80% времени;
- в данном случае показатель от 60% до 80%;

# Как контролировать:
- дробить задачи на 1..2 дня;
- каждый день спрашивать статус;
- убедиться, что задачи хорошо расписаны и готовы к началу разработки;
- устроить парное программирование, чтобы проверить фактическую скорость;

§ recommendations.author.oneTypeMans
получает слишком однообразные задачи по типу. Может выгореть.

# Почему это важно:
- если сотрудник выгорит, его скорость работы снизится;
- замедляется профессиональный рост;
- повышается вероятность увольнения;

# Как делается выборка:
- для каждого коммита определятся тип задачи;
- если больше 70% задач одного типа, значит человек делает одно и тоже;

§ recommendations.author.workToday.title: Работает $1
§ recommendations.author.workToday.description
над проектом в данный момент.

# Состав: 
- $1;

# Почему именно они:
- рабочих дней более 50%;
- работали в течении последних 30 дней;

§ recommendations.author.dismissed.title: Уволилось $1
§ recommendations.author.dismissed.description
или работало короткий промежуток времени.

# Состав:
- $1;

# Почему именно они:
- работали в нормальном ритме (видимо, это их основной репозиторий);
- за последний месяц не было ни одного коммита;
- отпуск обычно 14 дней (их отсутствие не похоже на отпуск);

§ recommendations.author.staff.title: Помогают $1
§ recommendations.author.staff.description
Люди другой специализации, которые что-либо коммитили.

# Состав: 
- $1;

# Почему именно они:
- это не open-source проект;
- рабочих дней менее 15% от общего числа;
- изменяют примерно одни и те же файлы;

§ recommendations.author.projectType.openSource.title
Открытый проект

§ recommendations.author.projectType.openSource.description
пять дней в неделю тут не работают.

Проект может быть и закрытым, просто такой темп работы обычно у открытых библиотек на GitHub.

# Метод оценки:
- берется статистика по всем активным разработчикам;
- подсчитывается среднее число дней работы и без коммитов;
- у open-source библиотек рабочих дней обычно максимум 15..20%;

# Последствия
Для проектов, где работа не постоянна, нет смысла во многих показателях. Поэтому показатели без коммитов, скорости и т.п. будут скрыты.

Как правило, оценку таких проектов делают перед началом разработки своей закрытой версии. Самые интересные показатели в этом случае вероятная стоимость и суммарное время на разработку.


§ recommendations.author.projectType.easy.title
Слабая загрузка

§ recommendations.author.projectType.easy.description
слишком много дней без коммитов. Нужно понять почему команда не пишет код.

# Метод оценки:
- берется статистика по всем активным разработчикам;
- подсчитывается среднее число дней работы и без коммитов;
- загрузка считается слабой, если процент без коммитов от 5% до 20%;

# Возможные причины:
- фактически нет задач;
- задачи есть, но хорошо ложатся на текущую архитектуру;
- разработчиков отвлекают совещаниями;
- команда не работает;

# Варианты решения:
- обсудить проблему с командой;
- уменьшить гранулярность задач, чтобы за день можно было успеть сделать одну или две задачи;
- ввести ежедневные совещания, чтобы проверять движение задач по статусу;
- устроить сеансы парного программирования, чтобы убедиться, что разработчик может работать быстрее;

§ recommendations.author.manager.title
Обозначьте дедлайны

§ recommendations.author.manager.description
У любой задачи должен быть чёткий дедлайн.
 
Это позволит не затягивать её выполнение на несколько дней или недель.

# Какие показатели стоит проверить:
- количество дней на одну задачу, которое тратит работник;
- количество дней ожидания влития PR (страница статистики по PR);

§ recommendations.author.shorTalk.title
Проводите ежедневные совещания

§ recommendations.author.shorTalk.description
они помогают быть в курсе проекта.
 
Не растягивайте их отвлекаясь на посторонние темы.

# На какие вопросы должен ответить сотрудник:
- что было сделано;
- что будет сделано;
- есть ли какие-либо проблемы;

# Следует обрывать монолог, если:
- начинают подробно описывать мелкие детали, которые не важны;
- уводят диалог в сторону, от первоначального плана;

# Почему это важно:
Часто сотрудник, который ничего не делает, старается уйти от ответа. Для этого он рассказывает кучу ненужных подробностей свой работы. Это позволяет усыпить внимание участников и растянуть время ответа. Создается ощущение что он чем-то занят, хотя по факту работы не было.

§ recommendations.author.ipr.title
Составьте план обучения

§ recommendations.author.ipr.description
на каждого сотрудника.

*Индивидуальный план обучения* — это список целей и задач, которые помогают человеку развиваться в определенной области.

# Как составить план:
- составить матрицу компетенций;
- определить по каким компетенциям меньше всего знаний и опыта;
- узнать какие из этих компетенций интересны сотруднику;
- придумать 3..5 целей в рамках каждой такой компетенции на полпостороние года или год;
- каждый месяц пытаться сделать что-либо для достижения одной цели;
- каждый месяц напоминать об общем плане достижения этих целей;

# Нужен ли план руководителю?
Да, руководитель так же должен составить план на себя. Если нет вышестоящего руководителя, то он должен проверять сам себя.

# Почему это важно:
- сотрудники становятся более лояльны к компании;
- за теже деньги вы получаете более квалифицированные кадры;

§ recommendations.author.oneToOne.title
Проводите 1-1 каждый месяц

§ recommendations.author.oneToOne.description
это поможет выявить проблемы на ранней стадии.

*One-to-one* — это регулярные личные встречи руководителя с подчиненным. На таких встречах обычно обсуждают всё, что важно для сотрудника, что его волнует, и то, чем он может поделиться с руководителем только наедине.

# Почему это важно:
- легко выяснить, кто из сотрудников перегружен, а у кого есть свободное время;
- можно предотвратить выгорание сотрудника;
- можно получить быструю обратную связь о процессах, которые вы можете не замечать;
- формируется доверительное отношение, сотрудники становятся более лояльны к компании;
- повышается мотивация и вовлеченность сотрудников;

§ recommendations.author.club.title
Ходите в бар

§ recommendations.author.club.description
один раз в месяц или два.

Это поможет выстроить неформальную коммуникацию в коллективе и сплотить команду, даже если общение будет сжатым.

# Почему это важно:
- можно получить быструю обратную связь о процессах, которые вы можете не замечать;
- формируется доверительное отношение, сотрудники становятся более лояльны к компании;
- повышается вовлеченность сотрудников;

§ recommendations.hour.onlyWork.title: Выходных тут нет
§ recommendations.hour.onlyWork.description: Вероятно, стоит уволить менеджера проекта.
§ recommendations.hour.weekends.title: Работа на выходных
§ recommendations.hour.weekends.description: Вероятно, стоит проверить менеджера проекта.
§ recommendations.hour.easy.title: Бывают проблемы
§ recommendations.hour.easy.description: Вероятно, бывают завалы и приходится работать на выходных.
§ recommendations.week.lazyDays.down.title: Стало меньше прогулов
§ recommendations.week.lazyDays.down.description: за последние три недели этот показатель упал
§ recommendations.week.lazyDays.up.title: Стало больше прогулов
§ recommendations.week.lazyDays.up.description: нет задач или нужен более жесткий контроль
§ recommendations.week.notWork.title: Стабильно не дорабатывает
§ recommendations.week.notWork.description: т.к. каждую неделю пишет код не 100% времени
§ recommendations.week.upWork.title: Стабильно перерабатывает
§ recommendations.week.upWork.description: т.к. каждую неделю пишет код в выходные дни
§ recommendations.week.task.up.title: Растёт производительность
§ recommendations.week.task.up.description: или задачи стали слишком мелкие. Нужно проверить. Если гранулярность та же - закрепить результат.
§ recommendations.week.task.lazyMaintainer.description: стабильный лидер по прогулам. Уволить?
§ recommendations.week.task.down.title: Падает производительность
§ recommendations.week.task.down.description
или задачи хуже разбивают. Нужно проверить. Если гранулярность та же - взять на контроль.

# Метод оценки:
- количество задач в день, над которыми работают, на протяжении последних трех недель стабильно падает.

# Возможные ошибки:
- задачи могли быть сложнее, чем казались;
- задачи могли иметь большой объём работы (нужно проверить количество изменений, падают они или нет за этот же период)

§ recommendations.type.everyHasOne.title: Не подписывают тип задачи
§ recommendations.type.everyHasOne.description: большинство типов задач делает один человек.
§ recommendations.type.oneMaintainer.title: Узкая специализация
§ recommendations.type.oneMaintainer.description
большинство задач одного типа делают одни и те же люди.

# Типы задач:

§ recommendations.type.common
# Возможно, это не так

Нужно убедиться, что остальные сотрудники верно подписывают коммиты.

Шаги, которые помогут это сделать:
- настроить пре-коммит проверку для commit message;
- объяснить команде, что нужно указывать тип;
- проверить в новых ветках, что сотрудники следуют правилу;

# Если это действительно так

Вы настроили проверки и убедились что один и тот же сотрудник, делает задачи одного и того же типа.

Почему это плохо:
- его увольнение остановит целую пачку процессов;
- уменьшается компетенция остальных членов команды;
- трудно верхнеуровнево понять его правки;

Как это исправить:
- распределять разные типы задач равномерно;
- менять область работы (тесты, документация, ошибки) между сотрудниками через спринт;

§ recommendations.type.fewTypes.title
Это локальный продукт

§ recommendations.type.fewTypes.description
для конкретного заказчика или проблемы.

# Какие признаки есть у «глобального» продукта:
- локализация;
- документация;
- большой объём тестов;
- визуальная кастомизация;
- рефакторинг узких мест;
- и т.п.

# Почему этот продукт выглядит как «локальный»:
- у каждого «глобального» признака будет перевес по своему типу задач;
- чем больше «глобальных» признаков, тем больше вероятность «глобального» продукта;

В данном случае мы видим небольшое число типов, а следовательно, скорее всего есть недоработки, мешающие легко масштабировать продукт на мировой рынок и продавать его в других странах.

# Возможно, это не так
По типам файлов мы можем предположить тип программы (сайт, серверное приложение, DevOps скрипты и т.д.). Для frontend приложения наша гипотеза будет более верной, чем для DevOps-скриптов, которые могут быть лишь микро-модулем инициализации.

§ recommendations.type.diff.title
Разбейте лидирующий тип на подтипы

§ recommendations.type.diff.description
для детализации ошибок.

Как правило, тип задач с меткой «исправление ошибок» является лидирующим. Это делает статистику слабо-детализированной.

*Если у вас произошла такая ситуация*, вы можете разбить этот тип на подтипы (например, по месту обнаружения).

Рассмотрим несколько вариантов подтипов:
- fix_dev (ошибка выявленная в процессе разработки);
- fix_test (ошибка выявленная в процессе тестирования);
- fix (ошибка выявленная в проде);

§ recommendations.type.buddy.title
Копите мелкие задачи

§ recommendations.type.buddy.description
для новых сотрудников.

# Если задача:
- не важная;
- не большая;
- не требует сильного погружения в контекст;
- больше про рефакторинг, чем про новый код;

# Положите её в backlog с меткой «для новичков».

Когда придёт новый сотрудник, вы сможете моментально достать ему пачку небольших и разнообразных по типу задач, для ознакомления с проектом.

Также, если у вас будет застой в работе, вы сможете доставать по одной такой мелкой задаче из backlog-а.
`;
