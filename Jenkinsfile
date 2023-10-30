pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/JustinNguyen9979/learn-jenkins.git'
            }
        }
        stage('Build') {
            steps {
                withDockerRegistry(credentialsId: 'Docker-Hub-Login', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t 997909799/learn-jenkins:V1.01 .'
                    sh 'docker push 997909799/learn-jenkins:V1.01'
                }
            }
        }

        stage('Cleanup Docker Images') {
            steps {
                sh "docker rmi 997909799/learn-jenkins:V1.01"
                sh "docker rmi node:14"
            }
        }
    }
    // post {
    //     always {
    //         mail bcc: '', body: 'Justin Learn Jenkins', cc: '', from: '', replyTo: '', subject: 'Learn Jenkins', to: 'duchuy_1997@hotmail.com'
    //     }
    // }
}
