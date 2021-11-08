import { DialogContentText } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Disputes1 from '../../assets/disputes1.jpeg';
import Disputes2 from '../../assets/disputes2.jpeg';
import Disputes3 from '../../assets/disputes3.jpeg';
import Aprtment from '../../assets/aprtment.jpeg';
import Aprtmen2 from '../../assets/apeartment-order.jpeg';
import Rent from '../../assets/rent.jpeg';
import Aprtment3 from '../../assets/apartment-developer.jpeg';

const List = styled.ul`
  text-align: start;
  margin: 0;
  padding: 0;
`;

const Li = styled.li``;

export const disputeCases = [
  {
    id: 1,
    title: 'Оспаривание прав собственности',
    paragraph: (
      <>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Законом предусмотрено наличие вещно-правовых исков, которые обеспечивают защиту прав
          собственности на недвижимость:
        </DialogContentText>
        <List>
          <Li>o признании права собственности – иск об исключении имущества из списка описи;</Li>
          <Li>об истребовании имущества из чужого незаконного владения; </Li>
          <Li>
            об устранении препятствий в пользовании недвижимым имуществом, не связанных с лишением
            владения недвижимостью.
          </Li>
        </List>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Учитывая тот факт, что оспаривание происходит в суде, крайне важным фактором успеха
          становится правильная подготовка всех необходимых документов.
        </DialogContentText>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Наша команда юристов готова провести бесплатную консультацию и оказать полный спектр услуг
          для решения Вашего вопроса на любой стадии и довести его до успешного разрешения.
        </DialogContentText>
      </>
    ),
    image: Disputes1,
  },
  {
    id: 2,
    title: 'Взыскание при порче имущества',
    paragraph: (
      <>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Довольно часто клиенты сталкиваются с порчей недвижимого имущества (своего или чужого) в
          силу разнообразных обстоятельств.
        </DialogContentText>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Наша компания готова оказать содействия в урегулировании таких вопросов и возмещении
          понесенного ущерба как в мирном, так и в судебном порядке.
        </DialogContentText>
      </>
    ),
    image: Disputes2,
  },
  {
    id: 3,
    title: 'Снятие с регистрационного учета и выселение из квартиры',
    paragraph: (
      <>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Довольно часто совместное проживание в одной жилой площади граждан приводит к
          возникновению конфликтов, что в конечном итоге выливается в споры, связанные с выселением
          или снятием с регистрационного учета одной из сторон конфликта.
        </DialogContentText>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Вместе с тем данные вопросы являются одними из самых сложных и зачастую сопровождаются
          большим количеством оспариваний, что приводит к значительному затягиванию решения вопроса.
        </DialogContentText>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Именно поэтому в данном вопросе крайне необходима консультация профильного юриста, который
          способен дать корректную правовую оценку ситуации и разработать оптимальную стратегию
          выстраивания дела, а также поможет собрать весь необходимый комплект документов и добиться
          нужного результата в кратчайшие сроки.
        </DialogContentText>
      </>
    ),
    image: Disputes3,
  },
  {
    id: 4,
    title: 'Вселение в квартиру',
    paragraph: (
      <>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Право проживать в том или ином жилом помещении может возникать у граждан на различных
          основаниях. При этом, вне зависимости от вида этого основания, у человека есть право
          пользования данным жильем. Воспрепятствование пользованию при этом является прямым
          нарушением его прав, для защиты которых необходимо обращаться в суд.
        </DialogContentText>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Наши специалисты готовы оказать полный перечень юридических услуг от бесплатной первой
          консультации до защиты Ваших интересов в суде и получения положительного решения в
          максимально короткие сроки.
        </DialogContentText>
      </>
    ),
    image: Aprtment,
  },
  {
    id: 5,
    title: 'Определение порядка пользования жилым помещением',
    paragraph: (
      <>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Зачастую возникновение существенных разногласий между владельцами недвижимого имущества
          приводит к необходимости судебного определения порядка пользования жилым имуществом.
        </DialogContentText>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          При этом решение о порядке пользования жилым помещением, принятое судом, должно быть
          исполнено в строгом соответствии со всеми предписаниями.
        </DialogContentText>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          В данном вопросе крайне важно правильно выстроить ход дела, проработать все возможные
          варианты, провести переговоры и подготовить нужные документы, так как от этого будет
          напрямую зависеть решение судебных органов и, как следствие, Ваша дальнейшая жизнь с
          соседями. Именно поэтому не стоит пренебрегать помощью профессиональных юристов, которые
          способны обеспечить положительное решение вопроса и избавят Вас от постоянного стресса,
          возникающего из-за споров с соседями.
        </DialogContentText>
      </>
    ),
    image: Aprtmen2,
  },
  {
    id: 6,
    title: 'Признание договоров купли-продажи, дарения, ренты - недействительными',
    paragraph: (
      <>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Правовые споры, связанные с неосторожным заключением договор купли-продажи, дарения и
          ренты недвижимого имущества, по праву считаются одними из самых сложных и трудозатратных,
          так как в них слишком многое зависит от деталей, отраженных в договоре.
        </DialogContentText>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Признание сделок оспоримыми или недействительными производится исключительно в судебном
          порядке.
        </DialogContentText>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Наши специалисты готовы оказать полный перечень юридических услуг от бесплатной первой
          консультации до защиты Ваших интересов в суде и получения положительного решения в
          максимально короткие сроки.
        </DialogContentText>
      </>
    ),
    image: Rent,
  },
  {
    id: 7,
    title: 'Жилищные споры с застройщиком',
    paragraph: (
      <>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Покупка жилого имущества напрямую у застройщика порой оборачивается для покупателей
          настоящим кошмаром, связанным с плохим качеством возведенного объекта, затягиванием сроков
          строительства, а иногда и вовсе обманом дольщиков и банкротством компании.
        </DialogContentText>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          В случае, если Вы столкнулись с недобросовестным застройщиком, Вам скорее всего не удастся
          урегулировать вопрос мирно и его придется решать в суде.
        </DialogContentText>
        <DialogContentText sx={{ color: '#000', marginBottom: '16px', textIndent: '32px' }}>
          Наша команда юристов имеет огромный опыт по взысканию компенсаций за убытки, понесенные по
          вине застройщика. При этом, в соответствии с действующим законодательством, возмещение
          может быть получено как в форме денежных выплат, так и в форме устранения застройщиком
          недостатков в жилом объекте (в случае наличия дефектов).
        </DialogContentText>
      </>
    ),
    image: Aprtment3,
  },
];

export const disputeExamples = [
  'Бывший супруг гражданки С. всячески препятствовал в пользовании общей квартирой, не впускал в нее. Наши юристы помогли клиенту в подготовке необходимых документов и представили его интересы в суде, благодаря чему суд запретил бывшему супругу чинить препятствия в пользовании квартирой',
  'Бывший супруг гражданки С. всячески препятствовал в пользовании общей квартирой, не впускал в нее. Наши юристы помогли клиенту в подготовке необходимых документов и представили его интересы в суде, благодаря чему суд запретил бывшему супругу чинить препятствия в пользовании квартирой',
];
