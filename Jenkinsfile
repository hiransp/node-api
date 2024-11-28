pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh whoami
                sh git --version
                sh which git
                sh 'echo "Hello World"'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
    }
}