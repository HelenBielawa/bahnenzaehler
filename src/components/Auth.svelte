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

    let loginStatus : Boolean = $state(true);

    async function handleLogin() {
        try {
            const response = await fetch(
                `https://www.schlossbad-erwitte.de/apps/bahnen/php/getUser.php?name=${loginEmail}&passwd=${loginPassword}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            //console.log('Response:', response);
            if (!response.ok) {
                throw new Error('Login failed');
            }

            const userData = await response.json();
            data.userID = userData.user.id;
            //console.log('Login successful:', data);

            goto('/meinebahnen');
            // Handle the response data (e.g., save token, redirect, etc.)
        } catch (error) {
            console.error('Error during login:', error);
            loginStatus = false;
            // Handle error (e.g., show error message to user)
        }
    }
    $inspect("registerEmail", registerEmail);
    async function handleRegister() {
        let lowerName = registerEmail.toLowerCase();
        try {
            const formData = new FormData();
            formData.append('name', registerEmail);
            formData.append('lcname', lowerName);
            formData.append('passwd', registerPassword);
            formData.append('summe', "0");

            const response = await fetch(
                'https://www.schlossbad-erwitte.de/apps/bahnen/php/createUser.php', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Registration failed: ${errorText}`);
            }

            // Always try to parse as JSON, even if content-type is wrong
            let data;
            try {
                data = await response.json();
                //console.log('Registration successful:', data);
                goto('/login');
                // Handle the response data (e.g., save token, redirect, etc.)
            } catch (e) {
                const text = await response.text();
                try {
                    data = JSON.parse(text);
                    //console.log('Registration successful (parsed manually):', data);
                    goto('/login');
                    // Handle the response data (e.g., save token, redirect, etc.)
                } catch (err) {
                    console.warn('Registration response is not JSON:', text);

                }
            }
        } catch (error) {
            console.error('Error during registration:', error);
            loginStatus = false;
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
        {#if !loginStatus}
            <p style="color: red;">Login fehlgeschlagen. Bitte überprüfe Deine Anmeldedaten.</p>
            <p>Sollte das Problem bestehen bleiben, schreib uns eine <a href="mailto:support@schlossbad-erwitte.de">E-Mail: support@schlossbad-erwitte.de</a></p>
        {/if}
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
            {#if !loginStatus}
                <p style="color: red;">Registrierung fehlgeschlagen. Bitte überprüfe Deine Anmeldedaten, oder versuche es mit einer anderen Kombination.</p>
                <p>Sollte das Problem bestehen bleiben, schreib uns eine <a href="mailto:support@schlossbad-erwitte.de">E-Mail: support@schlossbad-erwitte.de</a></p>
            {/if}
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