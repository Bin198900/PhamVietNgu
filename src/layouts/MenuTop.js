import React from "react";
import { FaBars } from "react-icons/fa";
const MenuTop = () => {
  return (
    <div class="menu_top">
      <nav id="menu" class="menu">
        <ul>
          <li className="icon_menu active">
            <a href="danh-sach-san-pham" title="All">
              <FaBars className="menuAll-icon" /> All
            </a>
            <ul>
              <div class="container_main">
                <li>
                  <a href="den-ngu" title="Đèn Ngủ">
                    <i className="far fa-angle-right"></i>Đèn Ngủ
                  </a>
                </li>
                <li>
                  <a href="quan-ao" title="Quần Áo">
                    <i className="far fa-angle-right"></i>Quần Áo
                  </a>
                </li>
              </div>
            </ul>
          </li>
          <li>
            <a href="/trang1">Trang 1</a>
          </li>
          <li>
            <a href="/trang2">Trang 2</a>
          </li>
          <li>
            <a
              target="blank"
              href="https://giadinh.edu.vn/de-an-tuyen-sinh-truong-dai-hoc-gia-dinh-nam-2024"
            >
              Đề án TS
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://giadinh.edu.vn/truong-dai-hoc-gia-dinh-thong-bao-3-cong-khai-nam-hoc"
            >
              Ba công khai
            </a>
          </li>
          <li>
            <a target="blank" href="https://sinhvien.giadinh.edu.vn/">
              Xem điểm
            </a>
          </li>
          <li>
            <a target="blank" href="https://lms.giadinh.edu.vn/">
              E-learning
            </a>
          </li>
          <li>
            <a target="blank" href="https://library.giadinh.edu.vn/search">
              Thư viện số
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://drive.google.com/file/d/1i0dE785sZgkMck2-j_z-kUJT8dYFWZFn/view?usp=sharing"
            >
              E-Brochure
            </a>
          </li>
          <li>
            <a href="lien-he">Liên hệ</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MenuTop;
