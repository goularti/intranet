function isAuthenticated() {
    const sessionId = localStorage.getItem('sessionId');

    return sessionId !== null;
}

export default isAuthenticated;
