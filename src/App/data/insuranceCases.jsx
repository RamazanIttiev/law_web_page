import React from 'react';
import { Typography } from '@mui/material';
import document from '../../assets/document.png';
import Clock from '../../assets/clock.png';
import alert from '../../assets/alert.png';
import Document from '../../assets/documents.svg';
import Court from '../../assets/gavel.svg';
import Lawyer from '../../assets/lawyer.svg';
import Proccess from '../../assets/proccess.svg';

export const insuranceCases = [
  {
    caseId: 1,
    primary: 'Досрочное расторжение договора страхования',
    title: 'Досрочно погасили кредит? Поможем вернуть страховые выплаты в кратчайшие сроки!',
    about: [
      'Полное сопровождение до момента получения денег;',
      'Более 5 лет успешной практики решения страховых вопросов;',
      'Гарантия качества и профессионализма;',
      '5 дней – максимальный срок подготовки всех необходимых документов;',
      'Персональный сотрудник и постоянное сопровождение в течение всего дела;',
      'Более половины дел решены в досудебном порядке.',
    ],
    subtitle: 'Частовстречающиеся проблемы при взыскании страховых выплат:',
    problems: [
      {
        text: (
          <Typography>
            Собран <strong>неполный комплект</strong> документов, либо в представляемых документах
            <strong>содержаться ошибки </strong>. Имеются <strong>нарушения в правилах</strong>
            досудебного порядка. В результате чего суд отклоняет иск, сроки рассмотрения дела
            увеличиваются, а Вы теряете свои деньги в связи с возникающими расходами.
          </Typography>
        ),
        icon: Document,
      },
      {
        text: (
          <Typography>
            <strong> Суд безосновательно затягивает сроки </strong> рассмотрения дела, что является
            серьезным нарушением процессуальных норм. Эта довольно распространённая проблема,
            возникающая в связи тем, что некоторые судьи пользуются незнанием гражданами
            процессуальных норм, их правовой безграмотностью и растерянностью.
          </Typography>
        ),
        icon: Court,
      },
      {
        text: (
          <Typography>
            <strong>Огромные временные затраты и сопутствующие издержки</strong> , возникающие в
            связи с необходимостью присутствовать на судебных заседаниях и собирать необходимые
            документы. Все это вынуждает постоянно менять свои планы, отпрашиваться с работы и
            терять деньги. Кроме того, стоит иметь ввиду, что из-за часто возникающих задержек,
            истец можете застрять в суде вплоть до полуночи.
          </Typography>
        ),
        icon: Clock,
      },
      {
        text: (
          <Typography>
            Страховые компании, как правило содержат
            <strong> большой штат высококлассных юристов </strong>. Их основная задача – это не дать
            делу развития и постараться <strong> развалить дело на начальном этапе</strong> . Кроме
            того, имея богатый опыт ведения дел, они профессионально преподносят в суде информацию,
            уводя внимание от важных фактов и направляя ход рассмотрения в нужное русло.
          </Typography>
        ),
        icon: Lawyer,
      },
      {
        text: (
          <Typography>
            <strong>Отсутствие четкой и выстроенной правовой позиции по делу.</strong> Дело
            выстраивается вокруг личных мнений и допущений, а не вокруг действующего
            законодательства и существующей судебной практики. В результате суд отказывает в иске. В
            результате нет никаких гарантий, что в будущем вы сможете оспорить решение, даже если
            воспользуетесь услугами профессиональных юристов.
          </Typography>
        ),
        icon: Proccess,
      },
    ],
    insuranceSteps: [
      {
        stepId: 1,
        icon: alert,
        title: 'На начальном этапе Увеличить шрифт!!!!!!',
        list: [
          'У клиента есть страховка на автомобиль, купленный в кредит;',
          'При заключении договора страхования, клиенту сообщили, что выплаченные взносы можно будет вернуть, в случае досрочного погашения кредита;',
          'Сумма, которую готова вернуть страховая компания, значительно меньше выплаченных взносов.',
        ],
      },
      {
        stepId: 2,
        icon: document,
        title: 'На этапе рассмотрения',
        list: [
          'Направлено заявление о возврате в страховую и получен отказ;',
          'Заключен не 1 договор страхования, а 2;',
          'Отказ суда и надзорных органов в рассмотрении вопроса',
        ],
      },
      {
        stepId: 3,
        icon: Clock,
        title: 'Личные мотивы',
        list: [
          'У клиента нет времени на посещение судебных заседаний и подготовку документов;',
          'Решение доверить своею проблему профессионалам',
        ],
      },
    ],
  },
  {
    caseId: 2,
    primary: 'Получение страхового возмещения',
    title: 'Получен ущерб в результате ДТП?',
    about: [
      'Профессиональное ведение дел по возмещению страховых выплат;',
      'Проведем справедливую оценку причиненного ущерба (без учёта износа);',
      'Более 5 лет успешной практики решения страховых вопросов;',
      'Гарантия качества и профессионализма.',
    ],
    subtitle: 'Часто встречающиеся проблемы при взыскании страховых выплат:',
    problems: [
      {
        text: (
          <Typography>
            Клиент подготовил заявление по образцу страховой компании, либо заявление подготовил
            сотрудник страховщика. В результате чего, размер страховой выплаты рассчитан по нижней
            границе возможной выплаты, либо
            <strong> продлевается срок рассмотрения вопроса.</strong>
          </Typography>
        ),
        icon: Document,
      },
      {
        text: (
          <Typography>
            <strong>Упущены сроки для подачи заявления</strong> , либо в заявлении
            <strong> нет необходимых ссылок</strong> на судебную практику. В результате страховая
            компания на вполне законных основаниях не выплачивает страховую выплату. Это вынуждает
            клиента повторно обращаться в суд, что существенно увеличивает сроки рассмотрения.
          </Typography>
        ),
        icon: Court,
      },
      {
        text: (
          <Typography>
            <strong> Суд безосновательно затягивает сроки </strong> рассмотрения дела, что является
            серьезным нарушением процессуальных норм. Эта довольно распространённая проблема,
            возникающая в связи тем, что некоторые судьи пользуются незнанием гражданами
            процессуальных норм, их правовой безграмотностью и растерянностью.
          </Typography>
        ),
        icon: Clock,
      },
      {
        text: (
          <Typography>
            <strong>Огромные временные затраты и сопутствующие издержки</strong> , возникающие в
            связи с необходимостью присутствовать на судебных заседаниях и собирать необходимые
            документы. Все это вынуждает постоянно менять свои планы, отпрашиваться с работы и
            терять деньги. Кроме того, стоит иметь ввиду, что из-за часто возникающих задержек,
            истец можете застрять в суде вплоть до полуночи.
          </Typography>
        ),
        icon: Lawyer,
      },
      {
        text: (
          <Typography>
            Страховые компании, как правило содержат
            <strong> большой штат высококлассных юристов </strong>. Их основная задача – это не дать
            делу развития и постараться <strong> развалить дело на начальном этапе</strong> . Кроме
            того, имея богатый опыт ведения дел, они профессионально преподносят в суде информацию,
            уводя внимание от важных фактов и направляя ход рассмотрения в нужное русло.
          </Typography>
        ),
        icon: Proccess,
      },
    ],

    insuranceSteps: [
      {
        stepId: 1,
        icon: alert,
        title: 'На начальном этапе',
        list: [
          'Наступил страховой случай, но клиент не знает, как получить страховую выплату;',
          'Страховая компания отказывается принимать заявление, объясняя это представлением неполного комплекта документов;',
          'Сумма страховой выплаты, предлагаемая страховой компанией значительно меньше понесенного ущерба',
        ],
      },
      {
        stepId: 2,
        icon: document,
        title: 'На этапе рассмотрения',
        list: [
          'Клиент написал заявление в страховую компанию и получил отказ;',
          'Страховая компания в подготовленном акте отразила не все факты и обстоятельства, которые клиент указал в своем заявлении;',
          'Отказ суда и надзорных органов в рассмотрении вопроса',
        ],
      },
      {
        stepId: 3,
        icon: Clock,
        title: 'Личные мотивы',
        list: [
          'У клиента нет времени на посещение судебных заседаний и подготовку документов;',
          'Решение доверить свою проблему профессионалам.',
        ],
      },
    ],
  },
  {
    caseId: 3,
    primary: 'Споры при отказе от навязанного договора стразования',
    title: 'Поможем вернуть деньги по навязанной страховке в кратчайшие сроки!',
    about: [
      'Полное сопровождение до момента получения денег;',
      'Более 5 лет успешной практики решения страховых вопросов;',
      'Гарантия качества и профессионализма;',
      '5 дней – максимальный срок подготовки всех необходимых документов;',
      'Персональный сотрудник и постоянное сопровождение в течение всего дела;',
      'Более половины дел решены в досудебном порядке.',
    ],
    subtitle: 'Часто встречающиеся проблемы при взыскании денег за навязанную страховку:',
    problems: [
      {
        text: (
          <Typography>
            <strong>Заявление подготовлено</strong> не в соответствии с образцом страховой компании
            <strong>или получен отказ</strong> на основании периода охлаждения. Возникают негативные
            последствия по взаимосвязанным условиям соглашений (кредит, купля-продажа и т.д.).
          </Typography>
        ),
        icon: Document,
      },
      {
        text: (
          <Typography>
            <strong>Упущены сроки для подачи заявления</strong> , либо в заявлении
            <strong> нет необходимых ссылок</strong> на судебную практику. В результате страховая
            компания на вполне законных основаниях не выплачивает страховую выплату. Это вынуждает
            клиента повторно обращаться в суд, что существенно увеличивает сроки рассмотрения.
          </Typography>
        ),
        icon: Court,
      },
      {
        text: (
          <Typography>
            <strong> Суд безосновательно затягивает сроки </strong> рассмотрения дела, что является
            серьезным нарушением процессуальных норм. Эта довольно распространённая проблема,
            возникающая в связи тем, что некоторые судьи пользуются незнанием гражданами
            процессуальных норм, их правовой безграмотностью и растерянностью.
          </Typography>
        ),
        icon: Clock,
      },
      {
        text: (
          <Typography>
            <strong>Огромные временные затраты и сопутствующие издержки</strong> , возникающие в
            связи с необходимостью присутствовать на судебных заседаниях и собирать необходимые
            документы. Все это вынуждает постоянно менять свои планы, отпрашиваться с работы и
            терять деньги. Кроме того, стоит иметь ввиду, что из-за часто возникающих задержек,
            истец можете застрять в суде вплоть до полуночи.
          </Typography>
        ),
        icon: Lawyer,
      },
    ],
    insuranceSteps: [
      {
        stepId: 1,
        icon: alert,
        title: 'На начальном этапе',
        list: [
          'У клиента есть страховка на автомобиль, купленный в кредит;',
          'При заключении договора страхования, клиенту сообщили, что выплаченные взносы можно будет вернуть, в случае досрочного погашения кредита;',
          'Отсутствует непосредственная связь между страховкой и кредитом',
        ],
      },
      {
        stepId: 2,
        icon: document,
        title: 'На этапе рассмотрения',
        list: [
          'Прошло более 13 дней с даты заключения страхового договора;',
          'Заключен не 1 договор страхования, а 2;',
          'Имеется дополнительное соглашение, согласно которому запрещено расторгать страховой договор',
        ],
      },
      {
        stepId: 3,
        icon: Clock,
        title: 'Личные мотивы',
        list: [
          'У клиента нет времени на посещение судебных заседаний и подготовку документов;',
          'Решение доверить своею проблему профессионалам',
        ],
      },
    ],
  },
];

export const insuranceExamples = [
  'Гражданка О. купила акции ПАО «Соль Руси» на 750 000 рублей с обещанной доходностью до 30%, однако деньги гражданке вместе с обещанной доходностью не вернули, а компания оказалась банкротом. Наш специалист подготовил исковое заявление и успешно представил интересы О. в суде, в результате чего в пользу клиента взыскана сумма в размере 1 237 000 рублей',
];
