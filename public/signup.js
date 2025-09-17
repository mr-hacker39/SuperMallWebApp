import { getAuth, createUserWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const auth = getAuth();

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
    alert("Signup successful! Please log in.");
    window.location.href = "login.html";
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert("This email is already registered. Please log in instead.");
      window.location.href = "login.html";
    } else {
      console.error("Signup Error:", error.message);
      alert("Signup failed: " + error.message);
    }
  }
});
