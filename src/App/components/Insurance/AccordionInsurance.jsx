import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import { Container } from '@mui/material';

const Base = styled.div`
  padding: ${props => props.theme.spacing(10)} 0;
  background: ${props => props.theme.palette.background.paper};
`;

const Details = styled(AccordionDetails)``;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  text-transform: uppercase;
`;

const List = styled.ul`
  padding: 0;
  margin-top: 16px;
`;

const ListItem = styled.li`
  margin: 16px 24px;
`;

const AccordionTitle = styled(Typography)``;

const AccordionInsurance = () => (
  <Base>
    <Container maxWidth="lg">
      <Title
        sx={{
          marginBottom: '32px',
        }}
      >
        мы оказываем все виды юридических услуг
      </Title>
      <Accordion sx={{ marginBottom: 4, padding: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <AccordionTitle sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
            Как разрешить спор со страховщиком?
          </AccordionTitle>
        </AccordionSummary>
        <Details>
          <List>
            <ListItem>
              Отношения в сфере страхования, где одним лицом выступает физическое лицо, а другим —
              страховая компания, регулируются Законом РФ № 4015-1 «Об организации страхового дела»
              и Законом РФ № 2300-1 «О защите прав потребителей».
            </ListItem>
            <ListItem>
              Из практики споров между участниками правоотношений в сфере страхования можно в
              наибольшей степени выделить такие споры, по которым Страховщик отказывает в выплате
              страхового возмещения, вводит Страхователя в заблуждение относительно правовой природы
              заключаемого договора или навязывает через своих партнеров услуги по страхованию жизни
              и имущества.
            </ListItem>
          </List>
        </Details>
      </Accordion>
      <Accordion sx={{ marginBottom: 4, padding: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <AccordionTitle sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
            Виды споров
          </AccordionTitle>
        </AccordionSummary>
        <Details>
          <List>
            <ListItem>
              Споры, возникающие при отказе Страховщика в выплате страхового возмещения.
            </ListItem>
            <ListItem>
              Споры о страховых выплатах между Страховщиками и автовладельцами являются наиболее
              яркими примерами в этой категории. Наличие всех необходимых документов, подтверждающих
              наступление страхового случая, на практике не всегда ведет к совершению действий,
              предусмотренных заключенным договором, со стороны Страховщика.
            </ListItem>
            <ListItem>
              Такие же нарушения проявляются и со стороны Страховщиков в вопросах выплаты возмещения
              по полису страхования жизни, здоровья и трудоспособности, что также является грубым
              нарушением действующего законодательства.
            </ListItem>
            <ListItem>
              Отказ Страховщика от действий, предусмотренных договором, не освобождает его от
              ответственности перед Страхователем и законом. Таким образом закон гарантирует и
              обеспечивает защиту прав и интересов Страхователей. Для этого необходимо соблюдать
              правила досудебного урегулирования данного спора перед подачей искового заявления.
            </ListItem>
            <ListItem>
              Обычно данная услуга предлагается банковским клиентам. В сущности, инвестиционный
              договор является договором страхования жизни, здоровья и нетрудоспособности, о чем в
              процедуре подписания договора, сотрудниками банка заведомо умалчивается либо
              обозначается приятным бонусом.
            </ListItem>
            <ListItem>Споры при заключении инвестиционного договора страхования жизни.</ListItem>
          </List>
        </Details>
      </Accordion>
      <Accordion sx={{ marginBottom: 4, padding: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <AccordionTitle sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
            Споры при отказе от навязанной страховки
          </AccordionTitle>
        </AccordionSummary>
        <Details>
          <List>
            <ListItem>
              При заключении кредитных договоров с клиентами, банки все чаще практикуют включение в
              сумму займа дополнительных платежей без уведомления получателя кредита. Одним из таких
              платежей чаще всего выступает полис добровольного страхования заемщика, стоимость
              которого составляет до 15% общей суммы кредита.
            </ListItem>
            <ListItem>
              В случае если клиент не желает совершать дополнительные платежи, банк в лице своих
              сотрудников сообщает об обеспечительной функции таких платежей, и говорит об отказе в
              заключении кредитного договора при нежелании включать данные платежи в его состав.
              Кроме того, для убедительности, клиенту устанавливают пониженную процентную ставку по
              кредиту, что на первый взгляд воспринимается им как выгода, в связи с чем Потребитель
              банковских услуг уже не видит необходимости детального изучения кредитного договора
              перед его подписанием.
            </ListItem>
            <ListItem>
              Потребитель банковских услуг рассчитывает на добросовестность сотрудников банка,
              которые, на первый взгляд, действуют в соответствии с законом, и пропускает, таким
              образом, прямые нарушения, которые те, в свою очередь, умело скрывают
            </ListItem>
          </List>
        </Details>
      </Accordion>
      <Accordion sx={{ marginBottom: 4, padding: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <AccordionTitle sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
            Погасили кредит досрочно?
          </AccordionTitle>
        </AccordionSummary>
        <Details>
          <List>
            <ListItem>
              Рассмотрим ситуацию досрочного погашения кредитного договора, в состав которого также
              входил страховой договор.
            </ListItem>
            <ListItem>
              В данном случае, при соблюдении определенных условий, возможно обращение в страховую
              организацию за возвратом части страховой премии, пропорциональной остатку периода
              действия договора страхования.
            </ListItem>
            <ListItem>
              Для осуществления этой процедуры необходимо внимательно ознакомиться с полисом
              страхования и определить выгодоприобретателя по договору, наличие изменений размера
              страховой выплаты с течением срока действия кредитного договора, а также риски,
              предусмотренные страховым полисом.
            </ListItem>
            <ListItem>
              Таким образом, при отказе Страховщика в возврате неизрасходованной части премии,
              существует возможность взыскания денежных средств путем подачи искового заявления в
              судебные инстанции. В таком случае, Страхователь может рассчитывать на компенсацию в
              виде неустойки за каждый день просрочки исполнения Страховщиком обязанности по
              возврату денежных средств, морального вреда, штрафа в размере 50% от присужденной
              суммы и судебных расходов, которые Страхователь был вынужден понести в связи с
              рассмотрением дела в суде.
            </ListItem>
          </List>
        </Details>
      </Accordion>
    </Container>
  </Base>
);

export default AccordionInsurance;