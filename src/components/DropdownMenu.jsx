import { useEffect, useId, useRef, useState } from 'react';
import Icon from './Icon.jsx';
export default function DropdownMenu({ options, value, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const root = useRef(null), trigger = useRef(null), optionRefs = useRef([]);
  const menuId = useId();
  const selected = options.find(option => option.value === value);
  useEffect(() => {
    if (!isOpen) return;
    const closeOutside = event => { if (!root.current?.contains(event.target)) setIsOpen(false); };
    document.addEventListener('pointerdown', closeOutside); document.addEventListener('focusin', closeOutside);
    return () => { document.removeEventListener('pointerdown', closeOutside); document.removeEventListener('focusin', closeOutside); };
  }, [isOpen]);
  useEffect(() => { if (isOpen) optionRefs.current[Math.max(0, options.findIndex(option => option.value === value))]?.focus(); }, [isOpen, options, value]);
  function handleKey(event, index) {
    if (event.key === 'Escape') { event.preventDefault(); setIsOpen(false); trigger.current.focus(); }
    let next;
    if (event.key === 'ArrowDown') next = (index + 1) % options.length;
    else if (event.key === 'ArrowUp') next = (index - 1 + options.length) % options.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = options.length - 1;
    if (next !== undefined) { event.preventDefault(); optionRefs.current[next]?.focus(); }
  }
  return <div className="dropdown" ref={root}><button ref={trigger} className="dropdown-trigger" aria-haspopup="menu" aria-expanded={isOpen} aria-controls={isOpen ? menuId : undefined} onClick={() => setIsOpen(!isOpen)} onKeyDown={event => { if (['ArrowDown', 'ArrowUp'].includes(event.key)) { event.preventDefault(); setIsOpen(true); } }}><Icon name="file" size={18} /><span>{selected?.label || 'Selecionar categoria'}</span><Icon name="chevron" size={17} /></button>
    {isOpen && <div className="dropdown-options" role="menu" id={menuId} aria-label="Filtrar documentos">{options.map((option, index) => <button ref={element => { optionRefs.current[index] = element; }} role="menuitemradio" aria-checked={option.value === value} tabIndex={-1} key={option.value} onKeyDown={event => handleKey(event, index)} onClick={() => { onSelect(option.value); setIsOpen(false); trigger.current.focus(); }}><span>{option.label}</span>{option.value === value && <Icon name="check" size={16} />}</button>)}</div>}</div>;
}
