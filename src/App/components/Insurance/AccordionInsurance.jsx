import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import { Container, useMediaQuery } from '@mui/material';

const Base = styled.div`
  padding: ${props => props.theme.spacing(10)} 0;
`;

const Title = styled(Typography).attrs({ variant: 'h1' })`
  text-transform: uppercase;
`;

const List = styled.ul`
  padding: 0;
  margin-top: 16px;
`;

const ListItem = styled.li`
  margin: 16px 32px;
`;

const AccordionInsurance = () => {
  const mobileScreen = useMediaQuery('(max-width:768px)');

  return (
    <Base>
      <Container maxWidth="lg">
        <Title
          sx={{
            marginBottom: '32px',
          }}
        >
          мы оказываем все виды юридических услуг
        </Title>
        <Accordion sx={{ width: `${mobileScreen && '100%'}`, marginBottom: 4, padding: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
              Как разрешить спор со страховщиком?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                В сфере страхования, где одной стороной является физическое лицо, а другой —
                страховая компания, отношения регулируются Законом РФ № 4015-1 «Об организации
                страхового дела» и Законом РФ № 2300-1 «О защите прав потребителей».
              </ListItem>
              <ListItem>
                Из практики споров в сфере страхования выделяются такие споры, в рамках которых
                страховая компания отказывается выплачивать страховое возмещение, вводит клиента в
                заблуждение касательно условий договора, прав и обязанностей клиента или навязывает
                ему необязательные услуги по страхованию жизни и имущества.
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: `${mobileScreen && '100%'}`, marginBottom: 4, padding: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
              Виды споров
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>Страховая компания отказывает в выплате страхового возмещения.</ListItem>
              <Typography sx={{ mb: 2, textIndent: '32px' }}>
                Споры между страховыми компаниями и автовладельцами являются самым часто
                встречающимся примером данной категории. При этом даже наличие всех необходимых
                документов, подтверждающих наступление страхового случая, не всегда ведет к
                получению страхователями полагающихся страховых выплат.
              </Typography>
              <Typography sx={{ mb: 2, textIndent: '32px' }}>
                Аналогичные нарушения совершают и страховые компании в рамках выплаты возмещения по
                вопросам страхования здоровья, жизни и трудоспособности, что также является грубым
                нарушением действующего законодательства.
              </Typography>
              <ListItem>
                Отказ страховых компаний от условий договора, не освобождает их от ответственности
                перед клиентами и законом. Действующее в Российской Федерации законодательство
                обеспечивает и гарантирует защиту прав и интересов граждан по вопросам страхования.
                Для этого важно соблюдать правила досудебного урегулирования данных вопросов перед
                подачей искового заявления.
              </ListItem>
              <ListItem>Инвестиционные договоры страхования жизни.</ListItem>
              <Typography sx={{ mb: 2, textIndent: '32px' }}>
                Как правило данная услуга предлагается клиентам банков. По своей сути,
                инвестиционный договор есть не что иное как договор страхования жизни, здоровья и
                нетрудоспособности. Однако, при подписании данного договора, сотрудники банка
                заведомо умалчивают данный факт, либо преподносят его как «приятный бонус».
              </Typography>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: `${mobileScreen && '100%'}`, marginBottom: 4, padding: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
              Отказ от навязанной страховки
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2, textIndent: '32px' }}>
              Банки, при заключении кредитных договоров, очень часто практикуют включение в сумму
              кредита дополнительных платежей без уведомления клиента. Наиболее часто одним из
              подобных платежей является полис добровольного страхования заемщика, стоимость
              которого составляет до 15% общей суммы кредита.
            </Typography>
            <Typography sx={{ mb: 2, textIndent: '32px' }}>
              В том случае, если клиент не хочет осуществлять дополнительные платежи, сотрудники
              банка сообщают об обеспечительной функции таких платежей, и заявляют об отказе в
              заключении кредитного договора, в случае если данные платежи не будут включены в его
              состав. Дополнительно, заемщику устанавливают сниженную процентную ставку по кредиту,
              что, на первый взгляд, может показаться выгодным. В результате клиент банка уже не
              тратит время на детальное изучение условий договора перед его подписанием.
            </Typography>
            <Typography sx={{ mb: 2, textIndent: '32px' }}>
              Клиенты банков рассчитывают на добросовестность сотрудников банка, которые, как им
              кажется, действуют в соответствии с требованием закона, и не замечают грубые
              нарушения, которые сотрудники умело скрывают.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ width: `${mobileScreen && '100%'}`, marginBottom: 4, padding: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontSize: 20, fontWeight: 700, color: '#345a80' }}>
              Погашение кредита досрочно
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 2, textIndent: '32px' }}>
              В случае досрочного погашения кредита, в состав которого входил страховой договор, при
              условии соблюдения определенных условий, возможно обращение в страховую компанию за
              возвратом части выплаченной страховой премии, соразмерной остатку срока действия
              договора страхования.
            </Typography>
            <Typography sx={{ mb: 2, textIndent: '32px' }}>
              Для реализации данной процедуры важно внимательно ознакомиться с Вашим полисом
              страхования и определить, кто является выгодоприобретателем по договору, наличие в нем
              изменений размера страховых выплат в течение срока действия кредита, а также риски,
              предусмотренные договором страхования.
            </Typography>
            <Typography sx={{ mb: 2, textIndent: '32px' }}>
              В таком случае, при отказе страховой компании в возврате неизрасходованной части
              премии, есть возможность вернуть денежные средства с помощью подачи иска в суд. Таким
              образом, клиент может рассчитывать на получение неустойки за каждый день просрочки
              исполнения страховой компанией обязанности по возврату денег, морального вреда, штрафа
              в размере 50% от присужденной суммы и судебных расходов.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Base>
  );
};

export default AccordionInsurance;
