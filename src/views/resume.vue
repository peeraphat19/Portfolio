<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<template>
<Navbar/>
<section class="bgresume">
<div class="Page">
      <div class="detail column1 c-left">
        <div class="e-pic">
          <img class="pic-me" src="@/assets/Picture/me.png" />
        </div>
        <div>
          <h3 class="header">CONTACT</h3>
        </div>
        <div class="sub-detail">Phone</div>
        <div class="sub-detail">0917611465</div>
        <div class="sub-detail">E-mail</div>
        <div class="sub-detail">peeraphat.sujarit@gmail.com</div>
        <div class="sub-detail">Address</div>
        <div class="sub-detail">
          2/27 Pruksa ville 37, Permsin, Bangkok 10220
        </div>

        <div>
          <h3 class="header">Education</h3>
        </div>
        <div class="sub-detail">
          Rajamangala University of Technology Thanyaburi
        </div>
        <div class="sub-detail">
          2021 - 2024 Bachelor of Engineering, Major in Electronics and
          Telecommunication Engineering GPA : 3.28
        </div>

        <div>
          <h3 class="header">Language</h3>
          <div class="sub-detail">Thai</div>
          <div class="sub-detail">English</div>
        </div>
      </div>

      <div class="detail column2 c-right">
        <div>
          <h1 class="name-me">PEERAPHAT SUJARIT</h1>
        </div>
        <div>
          <h3 class="header">EXPERIENCE</h3>
        </div>
        <h4 class="sub-detail">April - June 2023 TERO Entertainment PCL.</h4>
        <h4 class="sub-detail">Webmaster Intern</h4>
        <ul class="sub-detail">
          <li>
            Compiled the documents of Software Requirements Specification.
          </li>
          <li>Compiled the user manuals for system operation.</li>
          <li>Executed system tests based on test scripts.</li>
          <li>Coordinated with various departments.</li>
        </ul>
        <h4 class="sub-detail">May - August 2024 Convergence Technology</h4>
        <h4 class="sub-detail">System Engineer</h4>
        <ul class="sub-detail">
          <li>
            Install company software and maintain and troubleshoot systems for
            clients.
          </li>
          <li>Conduct program testing after system updates.</li>
          <li>
            Write knowledge base “Use Multipass Create and Manage Teleport
            Server” and “Update and Downgrade Teleport Server”
          </li>
        </ul>

        <div>
          <h3 class="header">TECHNICAL SKILL</h3>
        </div>
        <div>
          <ul class="sub-detail">
            <li>Basic Programming Languages</li>
            <li>Network Routing Switching</li>
            <li>SQL Statements</li>
            <li>Basic Command Linux</li>
            <li>Diagram Design</li>
          </ul>
        </div>

        <div>
          <h3 class="header">SOFT SKILL</h3>
        </div>
        <div>
          <ul class="sub-detail">
            <li>Communication</li>
            <li>Time Management</li>
            <li>Teamwork and Collaboration</li>
            <li>Critical Thinking</li>
          </ul>
        </div>
      </div>
    </div>
</section>
</template>

<style>
.bgresume {
    background-color: rgb(109, 107, 107);
    height: 100vh;
}

.Page {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 600px;
    height: 830px;
    margin: 0 auto;
    border: 1px solid rgb(172, 190, 206);
}

/* Left */

.column1 {
    background-color: #235aa8;
    padding: 20px;
    box-sizing: border-box;
}

.c-left {
    color: white;
}

.c-left .header {
    border-bottom: 1px solid;
    padding-top: 30px;
    box-sizing: border-box;
}

.c-left .sub-detail {
    font-size: smaller;
    margin-bottom: 15px;
} 

/* Right */

.column2 {
    background-color: white;
    padding: 10px;
    box-sizing: border-box;
}

.c-right {
    color: #323b4b;
}

.c-right .header {
    color: #e7b65c;
    padding-top: 10px;
}

.c-right .sub-detail {
    font-size: smaller;
}

/* Other */

.e-pic {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    margin: 0 auto;
    box-sizing: border-box;
}

.e-pic .pic-me {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}

.name-me {
    padding: 20px;
    margin: 0;
    border-bottom: 2px solid #e7b65c;
}

.detail {
    margin-top: 0px;
}

.detail .header {
    margin-top: 10px;
    margin-bottom: 5px;
}

.detail .sub-detail {
    margin: 0px;
}
</style>