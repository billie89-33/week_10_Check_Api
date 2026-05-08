                  Modular Structure

1. อย่างแรกที่ผมจะทำคือ จัดการเรื่อง Router หรือเส้นทางก่อนเลย
2. ผมแยก router ออกมาจาก app.jsx เพื่อรองรับ usecontext แต่ภายในงานนี้ไม่ได้ใช้ ผมฝึกไว้เฉยๆ npm install react-router-dom
3. สร้างส่วน Layout เพื่อจัดการเส้นทางของแต่ละ page
section 1 => git commit -m "section 1 setup router , Layout and tailwind"


4. ผมจะเริ่มสร้าง navbar และใช้ libary Navlink เพื่อจัดการเส้นทางในส่วนของ navbar โดยสร้าง อยู่ใน Component
5. สร้างโครงเพื่อกำหนดงานในอนาคต เพิ่ม pages ที่มี home, owner
section 2 => git commit -m "setup Navbar link Home,Owner"


6. ผมจะทำในส่วนของ api แยกออกมา Modular Service แยกการทำงานส่วน api ออกมาเพื่อให้ หน้าแรกไม่ต้องมี โค๊ดเยอะเกินไป src/services/api.js memberService.js 
7. ลง libary axios npm install axios
8. หน้า api สร้างโปรแกรม เส้น api  https://67eca027aa794fb3222e43e2.mockapi.io
9. สร้าง Service Layer หรือ จุด endpoint เพื่อไม่ส่วน การรับส่งข้อมูลไปมั่วที่หน้า page memberService
section 3 => git commit -m "setup api service"


10. ผมจะไปทำ Custom Hook ที่ดึง memberService.js มันทำ logic เพือแยกส่วนนี้ ออกจากหน้า home เพื่อไม่ให้ code รก
11. ภายในหน้านี้ ผมใช้  useState ว่างเอาไว้เพื่อรอเก็บค่า และใช้ function ของ setUseState ไปดึงต่า api มาเปลี่ยนค่า  และ รอหน้า home hook ไปใช้
section 3 =>  git commit -m "setup hook for api"


12. เริ่มสร้าง home รวมถึง design ด้วย tailwind และจะ ดึง hook มาใช้ และรองรับ ส่วนแยก ของ component
section 4 => git commit -m "complete Home page logic and Ui"
13. ผมจากสร้าง compponnet ที่ส่ง ค่า props ไป จากหน้า Home
14. component user
section 4.1 => git commit -m "create Component  Usersector "
15. component Admin
section 4.2 =>  git commit -m "complete component Adminsector and test connect api"


16. create pages/Owner 