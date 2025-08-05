import "./DealCards.css";

const cardsData = [
  {
    title: "Реклама",
    deal: "1 000 000",
    sum: "100 000 000 000",
    cards: [
      {
        name: "Mukhamadbobur",
        number: "102",
        sum: "100 000 000 000",
        phone: "+998 00 000 00 00",
        date: "21.03.2023",
        time: "22:32",
        tag: "#samargand",
        status: "Ожидание",
        color: "#CCE6EF",
      },
    ],
  },
  {
    title: "Сделки в шаурме",
    deal: "1 000 000",
    sum: "100 000 000 000",
    cards: [
      {
        name: "Mukhamadbobur",
        number: "102",
        sum: "100 000 000 000",
        phone: "+998 00 000 00 00",
        date: "21.03.2023",
        time: "22:32",
        tag: "#samargand",
        status: "Ожидание",
        color: "#FFDFA7",
      },
    ],
  },
  {
    title: "Сделки в шаурме",
    deal: "1 000 000",
    sum: "100 000 000 000",
    cards: [
      {
        name: "Mukhamadbobur",
        number: "102",
        sum: "100 000 000 000",
        phone: "+998 00 000 00 00",
        date: "21.03.2023",
        time: "22:32",
        tag: "#samargand",
        status: "Ожидание",
        color: "#FFCBCB",
      },
    ],
  },
  {
    title: "Сделки в шаурме",
    deal: "1 000 000",
    sum: "100 000 000 000",
    cards: [
      {
        name: "Mukhamadbobur",
        number: "102",
        sum: "100 000 000 000",
        phone: "+998 00 000 00 00",
        date: "21.03.2023",
        time: "22:32",
        tag: "#samargand",
        status: "Ожидание",
        color: "#fff7cc",
      },
    ],
  },
];

const DealCards = () => {
  return (
    <div className="deal-columns">
      {cardsData.map((column, index) => (
        <div className="deal-column" key={index}>
          <div className="deal-header">
            <p>• {column.title}</p>
            <div className="deal-meta">
              <div>
                сделка:<span>{column.deal}</span>
              </div>
              <div>
                на сумму:<span>{column.sum}</span>
              </div>
            </div>
          </div>

          {column.cards.map((card, i) => (
            <div
              className="deal-card"
              key={i}
              style={{ backgroundColor: card.color }}
            >
              <div className="card-header">
                <strong>{card.name}</strong>
                <span>№{card.number}</span>
              </div>
              <div className="card-sum">
                <span>на сумму</span>:<br />
                <h3>{card.sum}</h3>
              </div>
              <div className="card-footer">
                <span className="card-phone">{card.phone}</span>
                <span className="card-status">{card.status}</span>
              </div>
              <div className="card-meta">
                <span>{card.tag}</span>
                <div className="date-time">
                  <span>{card.date}</span>
                  <span>{card.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DealCards;
