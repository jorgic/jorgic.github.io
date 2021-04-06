import "./Languages.css";

export default function Languages({ language, setLanguage }) {
  const languages = ["en", "sl", "rs"];

  const handleLanguage = (e) => {
    setLanguage(e.target.innerText);
  };

  return (
    <div className="Languages">
      <ul>
        {languages.map((lang) => {
          return (
            <li
              className={lang === language ? `active` : null}
              onClick={(e) => handleLanguage(e)}
            >
              {lang}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
