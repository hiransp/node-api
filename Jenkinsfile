pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = 'your_dockerhub_username/your_app_name'
        TARGET_SERVER = 'your_target_server_ip'
        TARGET_PATH = '/path/to/deployment'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/your_username/your_repo.git'
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
