pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = 'hiranspx/node-server'
        TARGET_SERVER = '34.224.82.156'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'git@github.com:hiransp/node-web-server.git', credentialsId: 'github'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(env.DOCKER_HUB_REPO)
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials-id') {
                        docker.image(env.DOCKER_HUB_REPO).push('latest')
                    }
                }
            }
        }
        
        stage('Deploy to Target Server') {
            steps {
                sshagent(['ssh-key-credentials-id']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no user@${env.TARGET_SERVER} << EOF
                        docker pull ${env.DOCKER_HUB_REPO}:latest
                        docker stop your_container_name || true
                        docker rm your_container_name || true
                        docker run -d --name your_container_name -p 3000:3000 ${env.DOCKER_HUB_REPO}:latest
                        EOF
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
