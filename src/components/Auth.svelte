<script lang="ts">
    import { goto } from '$app/navigation';
    import { data } from '../stores/appData.svelte';

    let { type = "login" } = $props();

    let loginEmail: string = $state("");
    let loginPassword: string = $state("");
    let registerEmail: string = $state("");
    let registerPassword: string = $state("");
    let confirmPassword: string = $state("");
    let userID: number = $state(0);

    async function handleLogin() {
        try {
            const response = await fetch(
                `https://www.schlossbad-erwitte.de/apps/bahnen/php/getUser.php?name=${loginEmail}&passwd=${loginPassword}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log('Response:', response);
            if (!response.ok) {
                throw new Error('Login failed');
            }

            const userData = await response.json();
            data.userID = userData.userID;
            console.log('Login successful:', data);

            goto('/meinebahnen');
            // Handle the response data (e.g., save token, redirect, etc.)
        } catch (error) {
            console.error('Error during login:', error);
            // Handle error (e.g., show error message to user)
        }
    }

    async function handleRegister() {
        let lowerName = loginEmail.toLowerCase();
        try {
            const response = await fetch('https://www.schlossbad-erwitte.de/apps/bahnen/php/createUserGet.php'+'name='+{loginEmail}+'lcname='+{lowerName}+'passwd='+{loginPassword}+'summe=0', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('Login successful:', data);
            // Handle the response data (e.g., save token, redirect, etc.)
        } catch (error) {
            console.error('Error during login:', error);
            // Handle error (e.g., show error message to user)
        }
    }
</script>


<div class="auth-container">
    {#if (type == "login")}
    <h1>Einloggen</h1>
    <div class="form-container">
        <form on:submit|preventDefault={() => handleLogin()}>
            <label for="login-email">Name:</label>
            <input id="login-email" bind:value={loginEmail} required />
            
            <label for="login-password">Password:</label>
            <input id="login-password" type="password" bind:value={loginPassword} required />
            
            <button type="submit">Login</button>
        </form>
    </div>
    {:else if (type == "register")}
    <div class="form-container">
        <h2>Registrieren</h2>
        <form on:submit|preventDefault={() => handleRegister()}>
            <label for="register-email">Name:</label>
            <input id="register-email" bind:value={registerEmail} required />
            
            <label for="register-password">Passwort:</label>
            <input id="register-password" type="password" bind:value={registerPassword} required />
            
            <label for="confirm-password">Passwort bestätigen:</label>
            <input id="confirm-password" type="password" bind:value={confirmPassword} required />
            
            <button type="submit" disabled={registerPassword !== confirmPassword}>Register</button>
            {#if registerPassword !== confirmPassword}
                <p style="color: red;">Passwörter stimmen nicht überein.</p>
            {/if}
        </form>
    </div>
    {/if}
</div>



<style>
    .auth-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .form-container {
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 8px;
        width: 300px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    label {
        font-weight: bold;
    }

    input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 0.5rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>