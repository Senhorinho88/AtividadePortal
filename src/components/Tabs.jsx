import { useId, useRef, useState } from 'react';
import Icon from './Icon.jsx';
export default function Tabs({ tabs }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const prefix = useId();
  const buttons = useRef([]);
  function handleKey(event, index) {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault(); setActiveId(tabs[next].id); buttons.current[next].focus();
  }
  return <div className="benefits-box"><div className="tabs" role="tablist" aria-label="Categorias de benefícios">{tabs.map((tab, index) => <button key={tab.id} ref={element => { buttons.current[index] = element; }} id={`${prefix}-tab-${tab.id}`} role="tab" aria-selected={activeId === tab.id} aria-controls={`${prefix}-panel-${tab.id}`} tabIndex={activeId === tab.id ? 0 : -1} onClick={() => setActiveId(tab.id)} onKeyDown={event => handleKey(event, index)}><Icon name={tab.icon} size={18} />{tab.title}</button>)}</div>
    {tabs.map(tab => <div key={tab.id} role="tabpanel" id={`${prefix}-panel-${tab.id}`} aria-labelledby={`${prefix}-tab-${tab.id}`} hidden={activeId !== tab.id} tabIndex={0}>
      <div className="benefit-intro"><div><span className="eyebrow">CUIDADO EM CADA ETAPA</span><h3>{tab.heading}</h3><p>{tab.description}</p></div><span className="category-icon"><Icon name={tab.icon} size={38} /></span></div>
      <div className="benefit-grid">{tab.benefits.map(benefit => <article className="benefit-card" key={benefit.title}><span className="small-tag">EXEMPLO DE BENEFÍCIO</span><h4>{benefit.title}</h4><p>{benefit.description}</p><span className="benefit-highlight"><Icon name="check" size={16} />{benefit.highlight}</span></article>)}</div><p className="benefit-note">Convênios ilustrativos. Confirme a disponibilidade e as condições com o sindicato.</p>
    </div>)}</div>;
}
