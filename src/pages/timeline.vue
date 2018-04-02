<template>
  <q-page>

    <div class="area row">
      <div>Some technical and professional milestones in my life.</div>
    </div>

    <div class="area row"><div>
      <h4>Biographia</h4>
      <q-timeline color="secondary">
        <q-timeline-entry side="right" title="IT Operator, System Admin"
          subtitle="January 2016 till now">
          <p>divibib GmbH, Reutlingen<br />
            Linux administration and operations of Onleihe.de</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="Quasar + Vue Framework">
          <p>Start to use this after checking out Angular and React, too.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="ES6, TypeScript">
          <p>Try out the new technologies in different NPM modules.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="Confluence, Jira">
          <p>Administration, management and use at company.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="NodeJS, NPM, CoffeeScript">
          <p>Used for operation helper tools and server management processes.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="PostgreSQL">
        </q-timeline-entry>

        <q-timeline-entry side="right" title="Project Manager, Developer and Operator"
          subtitle="October 2011 - December 2015">
          <p>4Readers GmbH, Reutlingen<br />
            Planing and realization of modern sales platform for e-books and more.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="PHP, ffmpeg...">
          <p>Media conversion and management service with work queues.</p>
        </q-timeline-entry>

        <q-timeline-entry side="right" title="IT Manager and Developer"
          subtitle="February 2006 - September 2011">
          <p>INMEDEA GmbH, Tübingen<br />
          Continuation of the previous university project as company.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="JavaScript, CSS">
          <p>Development of frontend gadgets and effects.</p>
        </q-timeline-entry>

        <q-timeline-entry side="right" title="Software Developer"
          subtitle="August 2002 - January 2006">
          <p>University Hospital, Tübingen<br />
            Architecture and core developer for case based medical lkearning system.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="Java, JSP, Servlets">
          <p>Java web services using Tomcat as provider.</p>
        </q-timeline-entry>

        <q-timeline-entry side="right" title="Web Developer"
          subtitle="May 2001 - July 2002">
          <p>webhoch3 GmbH, Stuttgart<br />
            Architecture and development of own Content Management System for medium sized companies.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="PHP, MySQL">
          <p>Using PHP with MySQL to create dynamic, server rendered pages.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="JavaScript">
          <p>Own frontend framework to keverage the browser incompatibilities.</p>
        </q-timeline-entry>

        <q-timeline-entry side="right" title="Web Developer"
          subtitle="October 1998 - May 2001">
          <p>Brokat Technologies AG, Stuttgart<br />
            Web server operations, development of Content Management Systems and making of company websites.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="Perl, MySQL">
          <p>Using Perl with MySQL database as backend for automation to create web pages in a build run.</p>
        </q-timeline-entry>

        <q-timeline-entry side="right" title="Diploma of Economic Computer Science"
          subtitle="October 1994 - February 1999">
          <p>Study at FH Reutlingen with practica at Merckle Ratiopharm, Ulm</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="Linux">
          <p>More and more use of Linux OS like slackware, Suse, Debian...</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="Web Technologies">
          <p>Started to use and grow together with HTML, using Perl on the server side</p>
        </q-timeline-entry>

        <q-timeline-entry side="right" title="Communication Electronics Engineer"
          subtitle="September 1991 - July 1993">
          <p>Wandel &amp; Goltermann, Eningen u.A.<br />
            Education with focus on radio technology.</p>
        </q-timeline-entry>

        <q-timeline-entry side="left" title="Birth"
          subtitle="January 1974">
        </q-timeline-entry>

      </q-timeline>
    </div></div>

  </q-page>
</template>

<style lang="stylus" scoped>
.q-timeline-entry-left
  color: #666
.q-timeline-entry-right
  color: primary
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
