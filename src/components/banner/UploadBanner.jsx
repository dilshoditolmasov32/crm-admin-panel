import "./UploadBanner.css"

const UploadBanner = () => {
  return (
    <>
      <main className="content">
        <div className="banner-grid">
          <div className="banner-box">
            <span className="number">1</span>
            <p>1460×548 px</p>
          </div>
          <div className="banner-box">
            <span className="number">2</span>
            <p>320×296 px</p>
          </div>
        </div>
        <div className="buttons">
          <div className="desktop-submit-btn">
            <span>Desktop version</span>
            <button>Прикрепить</button>
          </div>
          <div className="mobile-submit-btn">
            <span>Mobil version</span>
            <button>Изменить</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default UploadBanner;
