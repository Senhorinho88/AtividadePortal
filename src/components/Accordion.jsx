import { useId, useState } from 'react';
import Icon from './Icon.jsx';
export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);
  const prefix = useId();
  return <div className="accordion">{items.map((item, index) => {
    const open = item.id === openId;
    const buttonId = `${prefix}-question-${item.id}`;
    const panelId = `${prefix}-answer-${item.id}`;
    return <article className={`faq-item ${open ? 'is-open' : ''}`} key={item.id}>
      <h3><button id={buttonId} aria-expanded={open} aria-controls={panelId} onClick={() => setOpenId(open ? null : item.id)}><span className="faq-number">{String(index + 1).padStart(2, '0')}</span><span>{item.title}</span><Icon name="plus" className="faq-toggle" size={19} /></button></h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}><p>{item.content}</p></div>
    </article>;
  })}</div>;
}
