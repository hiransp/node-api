pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh whoami
                sh git --version
                sh which git
                sh 'echo "Hello World"'
            }
        }
    }
}